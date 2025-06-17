const express = require("express");
const router = express.Router();
const BigFive = require("../models/bigfive");

router.post("/", async (req, res) => {
  try {
    const data = new BigFive(req.body);
    await data.save();
    res.json({ message: "BigFive saved" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
