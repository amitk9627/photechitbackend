const app = require("./app.js");
const mongoose = require("mongoose");
const port = process.env.port;
const mongoDBurl = process.env.mongoDBurl;
const mongoDB = async () => {
  await mongoose.connect(mongoDBurl);
};
mongoDB()
  .then(() => console.log("MongoDB Connected...."))
  .catch(() => console.log("MongoDB Disconnected...."));

app.listen(port, () => {
  console.log(`server connected... ${port}`);
});

// git config --global user.name "your_username"
// git config --global user.email "your_email@example.com"
