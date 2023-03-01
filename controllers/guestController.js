const Guest = require("../models/guest");

const addGuests = async (req, res) => {
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
