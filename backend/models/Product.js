const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  weight: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("product", schema);
