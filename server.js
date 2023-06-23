const apiMiddleware = require("./middlewares/apiKey");
const mainRouter = require("./routes/index");
const productRouter = require("./routes/product");
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
// app.use(apiMiddleware); // global level middleware
app.use(productRouter);
app.use(mainRouter);
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
