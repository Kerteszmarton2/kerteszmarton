const PerfumeNote = require("../models/PerfumeNote");

exports.getAllPerfumeNotes = async (req, res) => {
  try {
    const perfumeNotes = await PerfumeNote.find().populate(
      "perfume_id note_id"
    );
    res.status(200).json(perfumeNotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPerfumeNoteById = async (req, res) => {
  try {
    const perfumeNote = await PerfumeNote.findById(req.params.id).populate(
      "perfume_id note_id"
    );
    if (!perfumeNote)
      return res.status(404).json({ error: "Perfume Note not found" });
    res.status(200).json(perfumeNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPerfumeNote = async (req, res) => {
  try {
    const perfumeNote = new PerfumeNote(req.body);
    await perfumeNote.save();
    res.status(201).json(perfumeNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePerfumeNote = async (req, res) => {
  try {
    const perfumeNote = await PerfumeNote.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("perfume_id note_id");
    if (!perfumeNote)
      return res.status(404).json({ error: "Perfume Note not found" });
    res.status(200).json(perfumeNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePerfumeNote = async (req, res) => {
  try {
    const perfumeNote = await PerfumeNote.findByIdAndDelete(req.params.id);
    if (!perfumeNote)
      return res.status(404).json({ error: "Perfume Note not found" });
    res.status(200).json({ message: "Perfume Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
