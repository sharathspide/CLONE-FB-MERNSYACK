const express = require("express");
const cors = require("cors");
const app = express();

const option = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};

app.use(cors(option));

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/products", (req, res) => {
  res.send("Welcome to Products List");
});

app.listen(8000, () => {
  console.log("Server port 8000 is listening....");
});
