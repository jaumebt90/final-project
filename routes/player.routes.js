const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Player = require("../models/Player.model");

router.post("/players", (req, res, next) => {
  console.log("LO QUE LLEGA AL CREAR JUGADOR",req.body);

  const { image, name, alias, number, position, hobbie } = req.body;

  Player.create({ image, name, alias, number, position, hobbie })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/player/:id", (req, res, next) => {
  Player.findById(req.params.id)
  .then((response) => res.status(200).json(response))
  .catch((err) => res.json(err))
})

router.put("/players/:id", (req, res, next) => {
  const playerId = req.params.id

  if (!mongoose.Types.ObjectId.isValid(playerId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Player.findByIdAndUpdate(playerId, req.body, { new: true })
    .then((updatedPlayer) => res.json(updatedPlayer))
    .catch((err) => res.json(err))
})

module.exports = router;
