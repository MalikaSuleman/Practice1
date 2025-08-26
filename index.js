
const express = require('express');
 const mongoose = require("mongoose");
 require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000; 



app.get('/', (req, res) => {
  res.send('this is home crud API');
})


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("mongodb connected ..."))
.catch((err) => console.log(err))



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})