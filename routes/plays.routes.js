const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Jugada = require("../models/Jugada.model")

router.post("/play", (req, res, next) => {
    const {title, description, type} = req.body

    Jugada.create({title, description, type})
        .then((response) => res.json(response))
        .catch((err) => res.json(err))
})

router.get("/plays"), (req, res, next) => {
    Jugada.find()
        .then((allPlays) => res.json(allPlays))
        .catch((err) => res.json(err))
}


module.exports = router;