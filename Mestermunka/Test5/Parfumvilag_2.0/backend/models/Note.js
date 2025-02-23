const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, enum: ["top", "heart", "base"], required: true },
});

module.exports = mongoose.model("Note", noteSchema);
