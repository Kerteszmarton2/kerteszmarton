const mongoose = require("mongoose");

const perfumeNoteSchema = new mongoose.Schema({
  perfume_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Perfume",
    required: true,
  },
  note_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Note",
    required: true,
  },
});

module.exports = mongoose.model("PerfumeNote", perfumeNoteSchema);
