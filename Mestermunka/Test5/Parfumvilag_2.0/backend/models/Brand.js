const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  country: { type: String },
  foundation_year: { type: Number },
});

module.exports = mongoose.model("Brand", brandSchema);
