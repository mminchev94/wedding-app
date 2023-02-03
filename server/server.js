const express = require("express");
const db = require("./config/db");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
app.use(express.json());
db();
const Guest = require("./models/guest");

const port = process.env.PORT || 3000;

app.post("/guests", async (req, res) => {
  try {
    const names = req.body.names;
    const uniqueCode = req.body.uniqueCode;
    const veggie = req.body.veggie;

    await Guest.create({
      names,
      uniqueCode,
      veggie,
    });

    res.json({ names, uniqueCode, veggie });
  } catch (e) {
    res.sendStatus(400);
    console.log(e);
  }
});

app.get("/guests", async (req, res) => {
  try {
    const uniqueCode = req.body.uniqueCode;

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
