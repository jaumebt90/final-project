const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const New = require("./../models/News.model");

router.post("/news", (req, res, next) => {
  const { title, description } = req.body;

  New.create({ title, description })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete("/news/:id", (req, res, next) => {
  New.findByIdAndDelete(req.params.id)
    .then((response) => res.send("DELETE OKAY"))
    .catch((err) => res.json(err));
});

router.get("/news/:id", (req, res, next) => {
  New.findById(req.params.id)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.json(err));
});

router.put("/news/:id", (req, res, next) => {
  const newId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(newId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  New.findByIdAndUpdate(newId, req.body, { new: true })
    .then((updatedNew) => res.json(updatedNew))
    .catch((err) => res.json(err));
});

module.exports = router;
