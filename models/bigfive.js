const mongoose = require("mongoose");

const BigFiveSchema = new mongoose.Schema({
  userId: Number,
  answers: Object,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BigFive", BigFiveSchema);
