const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const guestController = require("./controllers/guestController");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
app.use(express.json());
app.use(cors());
db();

const port = process.env.PORT || 3000;

app.post("/guests", guestController.addGuests);

app.get("/guests", guestController.fetchGuests);

app.get("/guests/:password", guestController.fetchGuest);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
