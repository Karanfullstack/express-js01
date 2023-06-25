const router = require("express").Router();
let productsData = require("../productsData");
router.get("/product", (req, res) => {
  res.render("product", {
    title: "Product Page",
  });
});

router.get("/api/product", (req, res) => {
  res.json(productsData);
});

router.post("/api/product", (req, res) => {
  const {name, price} = req.body;
  if (!name || !price) {
    return res.status(422).json({error: "All fields are required}"});
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
