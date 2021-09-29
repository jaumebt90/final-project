const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Task = require("../models/Task.model");
const Project = require("../models/Project.model");

router.get("/club", (req, res, next) => {
  console.log(req);

  Project.find()
    .populate("tasks")
    .then((allProjects) => res.json(authToken, allProjects))
    .catch((err) => res.json(err));
});

module.exports = router;
