const express = require("express");
const router = express.Router();
const Demographics = require("../models/Demographics");

router.post("/", async (req, res) => {
  try {
    const data = new Demographics(req.body);
    await data.save();
    res.json({ message: "Demographics saved" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
