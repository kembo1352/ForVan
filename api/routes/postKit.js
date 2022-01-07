const router = require("express").Router();

router.post("/upload-kit", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`jersey/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({
      kitFileName: file.name,
      kitFilePath: `/jersey/${file.name}`,
    });
  });
});

module.exports = router;
