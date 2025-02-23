const Perfume = require("../models/Perfume");

exports.getAllPerfumes = async (req, res) => {
  try {
    const perfumes = await Perfume.find().populate("brand_id");
    res.status(200).json(perfumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPerfumeById = async (req, res) => {
  try {
    const perfume = await Perfume.findById(req.params.id).populate("brand_id");
    if (!perfume) return res.status(404).json({ error: "Perfume not found" });
    res.status(200).json(perfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPerfume = async (req, res) => {
  try {
    const perfume = new Perfume(req.body);
    await perfume.save();
    res.status(201).json(perfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePerfume = async (req, res) => {
  try {
    const perfume = await Perfume.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("brand_id");
    if (!perfume) return res.status(404).json({ error: "Perfume not found" });
    res.status(200).json(perfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePerfume = async (req, res) => {
  try {
    const perfume = await Perfume.findByIdAndDelete(req.params.id);
    if (!perfume) return res.status(404).json({ error: "Perfume not found" });
    res.status(200).json({ message: "Perfume deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
