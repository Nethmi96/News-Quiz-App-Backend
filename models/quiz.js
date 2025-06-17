const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  userId: Number,
  articleOrder: [Number],
  articleId: Number,
  stage: Number,
  familiarity: Number,
  trustworthiness: Number,
  confidence: Number,
  like: Number,
  comment: Number,
  factCheck: Number,
  share: Number,
  report: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Quiz", QuizSchema);
