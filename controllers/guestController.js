const Guest = require("../models/guest");

const addGuests = async (req, res) => {
  try {
    const { names, password, attendance, isFemale } = req.body;

    await Guest.create({
      names,
      password,
      attendance,
      isFemale,
    });

    res.json({ names, password, attendance, isFemale });
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

const updateGuestAttendance = async (req, res) => {
  try {
    const guestPassword = req.params.password;
    await Guest.findOneAndUpdate(
      { password: guestPassword },
      {
        attendance: true,
      }
    );

    const guest = await Guest.findOne({ password: guestPassword });

    res.json({ guest });
  } catch (e) {
    console.log(e);
  }
};

const fetchGuest = async (req, res) => {
  try {
    const { password } = req.params;

    const guest = await Guest.findOne({
      password,
    });

    if (!guest) return res.sendStatus(404);

    res.json({ guest });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { addGuests, fetchGuests, updateGuestAttendance, fetchGuest };
