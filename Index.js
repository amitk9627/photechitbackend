const app = require("./app.js");
require('dotenv').config();
const mongoose = require("mongoose");
const port =  3000;
const mongoDB = async () => {
  await mongoose.connect('mongodb+srv://ramitgzp:A6tZUiMX5lIjxstb@cluster0.llt2qkg.mongodb.net/photech');
};
mongoDB()
  .then(() => console.log("MongoDB Connected...."))
  .catch(() => console.log("MongoDB Disconnected...."));

app.listen(port, () => {
  console.log(`server connected... ${port}`);
});
