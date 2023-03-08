const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const db = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database");
  } catch (e) {
    console.log(e);
  }
};

module.exports = db;
