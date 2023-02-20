const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const Guest = require("./models/guest");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
app.use(express.json());
app.use(cors());
db();

const port = process.env.PORT || 3000;

app.post("/guests", async (req, res) => {
  try {
    const names = req.body.names;
    const uniqueCode = req.body.uniqueCode;
    const veggie = req.body.veggie;
    const attendance = req.body.attendance;

    await Guest.create({
      names,
      uniqueCode,
      veggie,
      attendance,
    });

    res.json({ names, uniqueCode, veggie, attendance });
  } catch (e) {
    res.sendStatus(400);
    console.log(e);
  }
});

app.get("/guests", async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json({ guests });
  } catch (e) {
    console.log(e);
  }
});

app.get("/guests/:code", async (req, res) => {
  try {
    const uniqueCode = req.params.code;

    const guest = await Guest.findOne({
      uniqueCode,
    });

    if (!guest) return res.sendStatus(404);

    res.json({ guest: guest.names });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
