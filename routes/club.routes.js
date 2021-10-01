const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const New = require("../models/News.model");

//  GET /api/projects -  Retrieves all of the projects

const Player = require("../models/Player.model");

router.get("/club", (req, res, next) => {
  /* console.log(req); */

  Player.find()
    .then((allPlayers) => res.json(allPlayers))
    .catch((err) => res.json(err));
});

module.exports = router;
