// import OPhy const body nlhnhn= require('body-parser') .name;lhn
var cors = require("cors");
const fileUpload = require("express-fileupload");
var multipart = require("connect-multiparty");

const MultipartyMiddleware = multipart({ uploadDir: "./postImage" });
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const bodyparser = require("body-parser");
var path = require("path");

port = 3080;

dotenv.config();

// app.use(express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  "/uploadsPreviewImage",
  express.static(path.join(__dirname, "uploadsPreviewImage"))
);
app.use("/jersey", express.static(path.join(__dirname, "jersey")));

app.use("/club_logo", express.static(path.join(__dirname, "club_logo")));
//Connect to database
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to db !")
);

mongoose.set("returnOriginal", false);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(fileUpload());

app.use(cors());
app.use(express.json());

app.get("/api/players", (req, res) => {
  console.log("api/players called!!!!");
  res.send("Hello");
  res.json(players);
});

app.post("/api/player", (req, res) => {
  const player = req.body.player;
  console.log("Adding player::::::::", player);
  players.push(player);
  res.json("player addedd");
});

app.get("/", (req, res) => {
  res.send("App Works !!!!");
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

//Import Auth Route
const authRoute = require("./routes/auth");

//Route Auth MiddleWare
app.use("/api/user", authRoute);

//Import Player Route
const playerRoute = require("./routes/PlayerInfoRoute");

//Route PlayerInfo Middleware
app.use("/api/player", playerRoute);

//Import FullPlayer Route
const fullPlayerRoute = require("./routes/fullPLayerRoute");

//Route FullPlayer MiddleWare
app.use("/api/player", fullPlayerRoute);

// app.use(function(req,res,next) {
//   JWT.verify(req.cookies['token'], 'nguyenducdung13520', function(err, decodedToken) {
//     if(err) { /* handle token err */ }
//     else {
//      req.userId = decodedToken.id;   // Add to req object
//      next();
//     }
//   });
//  });

// const getPlayerAndUser = require("./routes/auth");

// app.use("/api/user", getPlayerAndUser);

const userformation = require("./routes/userFormationRoute");

app.use("/api/userformation", userformation);

const saveFormation = require("./routes/saveFormation");

app.use("/api/user", saveFormation);

const pointRoute = require("./routes/pointRoute");

app.use("/api/user/", pointRoute);

const getUserRoute = require("./routes/getUserRoute");

app.use("/api/user", getUserRoute);

// app.post('/uploadImage', (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: 'No file uploaded' });
//   }

//   const file = req.files.file;

//   file.mv(`D:/DoAn/DoAn/doancodeReact/doancode-reactjs/my-app/public/uploads/${file.name}`, err => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// });

const postImage = require("./routes/postImage");

app.use("/api/user", postImage);

const updateUserInfoRoute = require("./routes/updateUser");

app.use("/api/updateUser", updateUserInfoRoute);

const getPostRoute = require("./routes/getPostRoute");

app.use("/api/landing", getPostRoute);

const postPreViewImage = require("./routes/postPreviewImage");

app.use("/api/post", postPreViewImage);

const uploadPostImage = require("./routes/uploadPostImageRoute");

app.use("/api/post", uploadPostImage);

const uploadNewPost = require("./routes/postNewPostRoute");

app.use("/api/post", uploadNewPost);

const editPost = require("./routes/editPost");

app.use("/api/post", editPost);

const deletePost = require("./routes/deletePost");

app.use("/api/post", deletePost);

const uploadKit = require("./routes/postKit");

app.use("/api/player", uploadKit);

const createNewPlayer = require("./routes/maintainPlayer");

app.use("/api/player", createNewPlayer);

const getAllClub = require("./routes/getClubRoute");

app.use("/api/club", getAllClub);
