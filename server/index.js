require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const { sendEmail } = require(`${__dirname}/controller/emailController`);

const port = 3005;

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(json());
app.use(cors());

app.post(`/email`, sendEmail);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Comin' at you from ${port}`);
});
