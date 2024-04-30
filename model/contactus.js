const { Schema, model } = require("mongoose");

const ContactUsSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);
module.exports = model("ContactUs", ContactUsSchema);
