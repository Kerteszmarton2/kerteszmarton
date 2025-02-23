const mongoose = require("mongoose");

const featuredPerfumeSchema = new mongoose.Schema({
  perfume_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Perfume",
    required: true,
  },
  start_date: { type: Date },
  end_date: { type: Date },
});

module.exports = mongoose.model("FeaturedPerfume", featuredPerfumeSchema);
