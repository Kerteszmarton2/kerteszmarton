const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  perfume_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Perfume",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: { type: Number, min: 1, max: 5 },
  review_text: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
