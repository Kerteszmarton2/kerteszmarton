const mongoose = require("mongoose");

const savedPerfumeSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  perfume_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Perfume",
    required: true,
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SavedPerfume", savedPerfumeSchema);
