const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  names: String,
  password: String,
  attendance: Boolean,
  isFemale: Boolean,
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
