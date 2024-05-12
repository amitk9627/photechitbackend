const app = require("./app.js");
const mongoose = require("mongoose");
const port = process.env.port || 4500;
const mongoDB = async () => {
  await mongoose.connect(process.env.mongoDBurl);
};
mongoDB()
  .then(() => console.log("MongoDB Connected...."))
  .catch(() => console.log("MongoDB Disconnected...."));

app.listen(port, () => {
  console.log(`server connected... ${port}`);
});
