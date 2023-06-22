const {log} = require("console");
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
console.log(app.get("views"));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index", {
    title: "HomePage",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "AboutPage",
  });
});

app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
