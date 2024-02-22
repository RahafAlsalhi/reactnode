const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});


app.get("/getdata", (req, res) => {
 
  const data = {
    name: "Rahaf",
    age: 22,
    field:"IT"
  };
  res.json(data);
});


app.get("/getprice", (req, res) => {
 
  const prices = {
    product1: 10,
    product2: 20,
    product3: 30,
    product4: 40
  };
  res.json(prices);
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
