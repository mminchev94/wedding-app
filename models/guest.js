const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  names: String,
  uniqueCode: String,
  attendance: Boolean,
  veggie: Object,
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
