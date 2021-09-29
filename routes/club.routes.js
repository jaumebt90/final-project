const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Task = require("../models/Task.model");
const Project = require("../models/Project.model");


router.get("/club", (req, res, next) => {
    Project.find()
      .populate("tasks")
      .then((allProjects) => res.json(allProjects))
      .catch((err) => res.json(err));
  });