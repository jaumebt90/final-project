const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const New = require("../models/News.model");

//  GET /api/projects -  Retrieves all of the projects

const Staff = require("../models/Staff.model");
const Player = require("../models/Player.model");

router.get("/club/staff", (req, res, next) => {
  /* console.log(req); */

  Staff.find()
    .then((allStaff) => {
      res.json(allStaff);
    })
    .catch((err) => console.log(err));
});

router.delete("/club/staff/:id", (req, res, next) => {
  
  Staff.findByIdAndDelete(req.params.id)
    .then((response) => res.send("DELETE OKAY"))
    .catch((err) => res.json(err))
})

router.get("/club/players", (req, res, next) => {
  /* console.log(req); */
  Player.find()
    .then((allPlayers) => {
      res.json(allPlayers);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
