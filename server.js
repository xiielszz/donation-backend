const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let donations = [];

// webhook socialbuzz
app.post("/webhook", (req, res) => {

  const body = req.body;

  const data = {
    name: body.name || "Anonim",
    amount: body.amount || 0,
    message: body.message || ""
  };

  donations.push(data);

  console.log("Donate masuk:", data);

  res.sendStatus(200);
});

// endpoint Roblox
app.get("/donations", (req, res) => {

  res.json({
    donations
  });

  donations = [];
});

app.get("/", (req, res) => {
  res.send("SocialBuzz Backend Aktif");
});

app.listen(process.env.PORT || 3000);
