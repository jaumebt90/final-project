const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const playerSchema = new Schema({
  image: String,
  name: String,
  alis: String,
  Number: Number,
  position: String,
  hobbies: String,
  // owner will be added later on
});

module.exports = model("Player", playerSchema);
