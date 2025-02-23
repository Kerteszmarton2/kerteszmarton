const SearchLog = require("../models/SearchLog");

exports.getAllSearchLogs = async (req, res) => {
  try {
    const searchLogs = await SearchLog.find().populate("user_id");
    res.status(200).json(searchLogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSearchLogById = async (req, res) => {
  try {
    const searchLog = await SearchLog.findById(req.params.id).populate(
      "user_id"
    );
    if (!searchLog)
      return res.status(404).json({ error: "Search Log not found" });
    res.status(200).json(searchLog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSearchLog = async (req, res) => {
  try {
    const searchLog = new SearchLog(req.body);
    await searchLog.save();
    res.status(201).json(searchLog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
