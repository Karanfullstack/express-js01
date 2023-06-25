const ErrorHandler = require("./errors/ErrorHandler");
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

app.use((req, res, next) => {
  return res.json({message: "not found"});
});

app.use((err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.status(err.status).json({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  } else {
    res.status(500).json({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  }
  console.log("Error:", err.message);
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
