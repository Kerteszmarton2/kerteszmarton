const mongoose = require("mongoose");

const searchLogSchema = new mongoose.Schema({
  search_term: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SearchLog", searchLogSchema);
