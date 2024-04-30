const app = require("./app.js");
require('dotenv').config();
const mongoose = require("mongoose");
const port = process.env.port ?? 3000;
const mongoDB = async () => {
  await mongoose.connect( process.env.mongoDBurl);
};
mongoDB()
  .then(() => console.log("MongoDB Connected...."))
  .catch(() => console.log("MongoDB Disconnected...."));

app.listen(port, () => {
  console.log(`server connected... ${port}`);
});
