const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Player = require("../models/Player.model");

router.post("/players", (req, res, next) => {
  const { name, alias, number, position, hobbies } = req.body;

  console.log(req.body);
  const { name, alias, number, position, hobbie } = req.body;

  Player.create({ name, alias, number, position, hobbie })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
