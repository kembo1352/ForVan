require("dotenv").config();
const router = require("express").Router();
const authUser = require("../model/authUser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  registerValidation,
  loginValidation,
  loginAdminValidation,
  createUserValidation,
} = require("../validation");
const club = require("../model/club");
const admin = require("../model/admin");

router.post("/register", async (req, res) => {
  //VALIDATE DATA

  var foundClub = await club.findOne({ name: req.body.newFavClub }).exec();
  const newClubId = foundClub._id;

  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //CHECK IF THE USER IS ALREADY IN THE DATABASE
  const emailExist = await authUser.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // const salt = await bcrypt.gentSalt(10);
  // const hashPassword = await bcrypt.hash(req.body.password, salt)

  //CREATE NEW USER
  const user = new authUser({
    name: req.body.newAccountName,
    email: req.body.email,
    password: req.body.password,
    avatar: "/uploads/noneplayer.jpg",
    lastName: req.body.newLastName,
    firstName: req.body.newFirstName,
    mobile: req.body.newMobile,
    address: req.body.newAddress,
    fav_club: newClubId,
    nation: "Viet Nam",
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/create-user", async (req, res) => {
  const { error } = createUserValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //CHECK IF THE USER IS ALREADY IN THE DATABASE
  const emailExist = await authUser.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");
  console.log(emailExist);

  // const salt = await bcrypt.gentSalt(10);
  // const hashPassword = await bcrypt.hash(req.body.password, salt)

  //CREATE NEW USER
  const user = new authUser({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //CHECK THE EMAIL EXISTS

  const user = await authUser.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email doesn't exits");

  //PASSWORD IS CORRECT

  // const validPass = await bcrypt.compare(req.body.password, user.password);
  // if (!validPass) return res.status(400).send("Invalid password");

  if (req.body.password !== user.password) {
    return res.status(400).send("Invalid password");
  }

  //Create and Asign Token

  const token = jwt.sign({ user: user }, process.env.TOKEN_SECRET);
  res.header("token", token).send({ token: token });
  console.log("Logged In");
});

// LOGIN ADMIN

router.post("/login-admin", async (req, res) => {
  const { error } = loginAdminValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //CHECK THE NAME EXISTS

  const authAdmin = await admin.findOne({ name: req.body.name });

  if (!authAdmin)
    return res
      .status(400)
      .send("Account doesn't exist! Please contact to resgister");

  //PASSWORD IS CORRECT

  // const validPass = await bcrypt.compare(req.body.password, user.password);
  // if (!validPass) return res.status(400).send("Invalid password");

  if (req.body.password !== authAdmin.password) {
    return res.status(400).send("Invalid password");
  }

  //Create and Asign Token

  const token = jwt.sign({ authAdmin: authAdmin }, process.env.TOKEN_SECRET);
  res.header("token", token).send({ token: token });
  res.send("Logged In");
});

module.exports = router;
