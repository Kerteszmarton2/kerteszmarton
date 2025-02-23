const SavedPerfume = require("../models/SavedPerfume");

exports.getAllSavedPerfumes = async (req, res) => {
  try {
    const savedPerfumes = await SavedPerfume.find().populate(
      "user_id perfume_id"
    );
    res.status(200).json(savedPerfumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSavedPerfumeById = async (req, res) => {
  try {
    const savedPerfume = await SavedPerfume.findById(req.params.id).populate(
      "user_id perfume_id"
    );
    if (!savedPerfume)
      return res.status(404).json({ error: "Saved Perfume not found" });
    res.status(200).json(savedPerfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSavedPerfume = async (req, res) => {
  try {
    const savedPerfume = new SavedPerfume(req.body);
    await savedPerfume.save();
    res.status(201).json(savedPerfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSavedPerfume = async (req, res) => {
  try {
    const savedPerfume = await SavedPerfume.findByIdAndDelete(req.params.id);
    if (!savedPerfume)
      return res.status(404).json({ error: "Saved Perfume not found" });
    res.status(200).json({ message: "Saved Perfume deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
