const mongoose = require("mongoose");

const perfumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  gender: { type: String, enum: ["male", "female", "unisex"] },
  type: { type: String },
  launch_year: { type: Number },
  description: { type: String },
  image_url: { type: String },
});

module.exports = mongoose.model("Perfume", perfumeSchema);
