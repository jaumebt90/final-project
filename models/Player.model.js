const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const playerSchema = new Schema({
  image: String,
  name: String,
  alias: String,
  number: Number,
  position: String,
  hobbie: [String],
  // owner will be added later on
});

module.exports = model("Player", playerSchema);
