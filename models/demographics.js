const mongoose = require("mongoose");

const DemographicsSchema = new mongoose.Schema({
  userId: Number,
  age: Number,
  gender: String,
  education: String,
  socialMediaUse: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Demographics", DemographicsSchema);
