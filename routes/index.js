const router = require("express").Router();
const express = require("express");
const mongoose = require("mongoose");
const multer =require("./../config/cloudinary-config")

const New = require("../models/News.model")

router.get("/", (req, res, next) => {

    New.find()
      .then((allNews) => res.json(allNews))
      .catch((err) => res.json(err));
      
});

router.post("/upload", multer.single("file"), (req, res, next) => {
  console.log("SUBIDA A CLOUDINARY", req.file.path)

  console.log(req.file.path)

  res.json({imageUrl: req.file.path})

})

module.exports = router;
