const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const New = require("../models/News.model");

router.post("/news", (req, res, next) => {
  console.log(req.body);
  const { title, description } = req.body

  New.create({title, description})
  .then((response) => res.json(response))
  .catch((err) => res.json(err))
});

module.exports = router;
