const apiMiddleware = require("./middlewares/apiKey");
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes/index");
// middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
// app.use(apiMiddleware); // global level middleware
app.use(mainRouter);
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
