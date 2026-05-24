const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let donations = [];

// webhook dari SocialBuzz
app.post("/webhook", (req, res) => {

  console.log("WEBHOOK MASUK:");
  console.log(req.body);

  const body = req.body;

  const data = {
    name: body.name || body.username || "Anonim",
    amount: body.amount || body.nominal || 0,
    message: body.message || body.msg || ""
  };

  donations.push(data);

  console.log("DONASI DISIMPAN:", data);

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

app.listen(process.env.PORT || 3000, () => {
  console.log("Server berjalan");
});
