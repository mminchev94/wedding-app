const Guest = require("../models/guest");

const addGuests = async (req, res) => {
  try {
    const { names, uniqueCode, attendance, isFemale } = req.body;

    await Guest.create({
      names,
      uniqueCode,
      attendance,
      isFemale,
    });

    res.json({ names, uniqueCode, attendance, isFemale });
  } catch (e) {
    res.sendStatus(400);
    console.log(e);
  }
};

const fetchGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json({ guests });
  } catch (e) {
    console.log(e);
  }
};

const fetchGuest = async (req, res) => {
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
};

module.exports = { addGuests, fetchGuests, fetchGuest };
