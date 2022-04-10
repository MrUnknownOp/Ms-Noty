

const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  coins: { type: Number, default: 1000 },
  lb: { type: String , required: true },
  bank: { type: Number },
  Space: { type: Number, default: 1000 },
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;