const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  perfume_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Perfume",
    required: true,
  },
  store_name: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  url: { type: String },
});

module.exports = mongoose.model("Store", storeSchema);
