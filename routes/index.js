const router = require("express").Router();
const apiMiddleware = require("../middlewares/apiKey");

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

router.get("/products", apiMiddleware, (req, res) => {
  res.json([
    {
      id: "1234",
      name: "Chrome",
    },
    {
      id: "124",
      name: "FireFox",
    },
  ]);
});

module.exports = router;
