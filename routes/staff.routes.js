const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Staff = require("../models/Staff.model");

router.post("/staff", (req, res, next) => {
  console.log(req.body);
  const { image, name, alias, position, hobbie } = req.body;

  Staff.create({ image, name, alias, position, hobbie })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/staff/:id", (req, res, next) => {
  Staff.findById(req.params.id)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.json(err));
});

router.put("/staff/:id", (req, res, next) => {
  const staffId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(staffId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Staff.findByIdAndUpdate(staffId, req.body, { new: true })
    .then((updatedStaff) => res.json(updatedStaff))
    .catch((err) => res.json(err));
});

module.exports = router;
