const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 4000;
const DB = "mongodb://localhost:bestAPI";
const DB_ONLINE = " ";

const app = express();

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database has been connected successfully...!");
  });

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("API is ready for consumption");
});

app.listen(port, () => {
  console.log(`server is ready to listen to port: ${port}`);
});
