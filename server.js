const {log} = require("console");
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes/index");
app.set("view engine", "ejs");
console.log(app.get("views"));

app.use(express.static("public"));
app.use(mainRouter);
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
