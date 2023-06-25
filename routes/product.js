const router = require("express").Router();
const ErrorHandler = require("../errors/ErrorHandler");
const apikey = require("../middlewares/apiKey");
let productsData = require("../productsData");

router.get("/product", (req, res) => {
  res.render("product", {
    title: "Product Page",
  });
});

router.get("/api/product", (req, res) => {
  res.json(productsData);
});

router.post("/api/product", apikey, (req, res, next) => {
  const {name, price} = req.body;
  // try {
  //   console.log(city);
  // } catch (error) {
  //   next(ErrorHandler.serverError(error.message));
  // }

  if (!name || !price) {
    // return res.status(422).json({error: "All fields are required}"});
    // throw new Error("All fields are required");
    next(ErrorHandler.ValidationError());
  }
  const product = {
    name,
    price,
    id: new Date().getTime().toString(),
  };
  productsData.push(product);
  res.json(product);
});

router.delete("/api/product/:productId", (req, res) => {
  productsData = productsData.filter(
    (item) => req.params.productId !== item.id
  );
  res.json({
    message: "OK",
    data: productsData,
  });
});

// router.delete("/api/product", (req, res)=>{

// })

module.exports = router;
