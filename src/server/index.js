const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Aylien = require("aylien_textapi");

const PORT = 8000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

const api = new Aylien({
  application_id: "68837b99",
  application_key: "0c18469543844e03b477be1a884e87bc"
});

app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/apiKey", (req, res) => {
  const { text } = req.body;
  console.log(text);
  api.sentiment({ text }, (error, result, remaining) => {
    console.log("Aylien Callback", result, remaining);
    res.send(result);
  });
});

app.listen(PORT, () => console.log(`Port ${PORT}!`));
