const express = require("express");
const router = express.Router();
const Quiz = require("../models/quiz");

router.post("/", async (req, res) => {
  try {
    const data = new Quiz(req.body);
    await data.save();
    res.json({ message: "Quiz saved" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
