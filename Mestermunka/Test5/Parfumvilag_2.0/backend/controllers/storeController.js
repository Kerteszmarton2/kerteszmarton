const Store = require("../models/Store");

exports.getAllStores = async (req, res) => {
  try {
    const stores = await Store.find().populate("perfume_id");
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStoreById = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id).populate("perfume_id");
    if (!store) return res.status(404).json({ error: "Store not found" });
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createStore = async (req, res) => {
  try {
    const store = new Store(req.body);
    await store.save();
    res.status(201).json(store);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("perfume_id");
    if (!store) return res.status(404).json({ error: "Store not found" });
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndDelete(req.params.id);
    if (!store) return res.status(404).json({ error: "Store not found" });
    res.status(200).json({ message: "Store deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
