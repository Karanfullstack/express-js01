const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "HomePage",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "AboutPage",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

module.exports = router;
