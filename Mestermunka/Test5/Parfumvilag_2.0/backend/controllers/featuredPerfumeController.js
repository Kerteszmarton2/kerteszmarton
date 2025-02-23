const FeaturedPerfume = require("../models/FeaturedPerfume");

exports.getAllFeaturedPerfumes = async (req, res) => {
  try {
    const featuredPerfumes = await FeaturedPerfume.find().populate(
      "perfume_id"
    );
    res.status(200).json(featuredPerfumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFeaturedPerfumeById = async (req, res) => {
  try {
    const featuredPerfume = await FeaturedPerfume.findById(
      req.params.id
    ).populate("perfume_id");
    if (!featuredPerfume)
      return res.status(404).json({ error: "Featured Perfume not found" });
    res.status(200).json(featuredPerfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createFeaturedPerfume = async (req, res) => {
  try {
    const featuredPerfume = new FeaturedPerfume(req.body);
    await featuredPerfume.save();
    res.status(201).json(featuredPerfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateFeaturedPerfume = async (req, res) => {
  try {
    const featuredPerfume = await FeaturedPerfume.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("perfume_id");
    if (!featuredPerfume)
      return res.status(404).json({ error: "Featured Perfume not found" });
    res.status(200).json(featuredPerfume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFeaturedPerfume = async (req, res) => {
  try {
    const featuredPerfume = await FeaturedPerfume.findByIdAndDelete(
      req.params.id
    );
    if (!featuredPerfume)
      return res.status(404).json({ error: "Featured Perfume not found" });
    res.status(200).json({ message: "Featured Perfume deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
