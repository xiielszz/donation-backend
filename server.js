const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let donations = [];

app.post("/donate", (req, res) => {

  const data = {
    name: req.body.name || "Anonim",
    amount: req.body.amount || 0,
    message: req.body.message || ""
  };

  donations.push(data);

  console.log(data);

  res.json({
    success: true
  });
});

app.get("/donations", (req, res) => {

  res.json({
    donations: donations
  });

  donations = [];
});

app.get("/", (req, res) => {
  res.send("Backend Aktif");
});

app.listen(process.env.PORT || 3000);
