const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Jugada = require("../models/Jugada.model");

router.post("/play", (req, res, next) => {
  console.log("NUEVA JUGADA", req.body);
  const { title, description, type } = req.body;

  Jugada.create({ title, description, type })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/plays", (req, res, next) => {
  Jugada.find()
    .then((allPlays) => res.json(allPlays))
    .catch((err) => res.json(err));
});

// router.delete("plays/:id", (req, res, next) => {
//     console.log("Llega al BACK DELETE", req.params.id)
//   Jugada.findByIdAndDelete(req.params.id)
//     .then((response) => res.send("DELETE OKAY"))
//     .catch((err) => res.json(err));
// });

router.delete("/plays/:id", (req, res, next) => {
  console.log("Llega al BACK DELETE", req.params.id);
  Jugada.findByIdAndDelete(req.params.id)
    .then((response) => res.send("DELETE OKAY"))
    .catch((err) => res.json(err));
});

router.get("/plays/edit/:id", (req, res, next) => {

    Jugada.findById(req.params.id)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.json(err))
})

router.put("/plays/:id", (req, res, next) => {
    const playId = req.params.id

    if (!mongoose.Types.ObjectId.isValid(playId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
      }

    Jugada.findByIdAndUpdate(playId, req.body, { new: true })
    .then((updatedPlay) => res.json(updatedPlay))
    .catch((err) => res.json(err))
})


module.exports = router;
