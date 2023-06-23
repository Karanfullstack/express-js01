const router = require("express").Router();
const productsData = require("../productsData");
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
  console.log(product);
});

module.exports = router;
