const express = require("express");
const router = express.Router();

// Load Validation

const Product = require("../models/Product");

// @route   GET api/product/test
// @desc    Tests product route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Product Works" }));

// @route   GET api/product
// @desc    Get current users product
// @access  Private
router.get(
  "/",
  (req, res) => {
    const errors = {};

    Product.find({})
      .then((product) => {
        if (!product) {
          errors.noproduct = "There is no product for this user";
          return res.status(404).json(errors);
        }
        res.json(product);
      })
      .catch((err) => res.status(404).json(err));
  }
);

// @route   GET api/product/:id
// @desc    Get product by id
// @access  Public

router.get("/:id", (req, res) => {
  const errors = {};

  Product.findOne({ _id: req.params.id })
    .then((product) => {
      if (!product) {
        errors.noproduct = "There is no product for this user";
        res.status(404).json(errors);
      }

      res.json(product);
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
