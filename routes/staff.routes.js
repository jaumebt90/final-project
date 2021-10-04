const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Staff = require("../models/Staff.model");

router.post("/staff", (req, res, next) => {
  console.log(req.body);
  const { name, alias, position, hobbie } = req.body;

  Staff.create({ name, alias, position, hobbie })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
