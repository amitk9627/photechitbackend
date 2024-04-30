const ContactUs = require("../model/contactus.js");

const createNewMessage = async (req, res) => {
  try {
    const DataPacket = ["name", "email", "message"];
    const Databody = req.body;
    for (let field of DataPacket) {
      if (!Databody[field]) {
        console.log("---- Missing Field ----",field ,"----");
        return res.status(404).json({
          status: false,
          message: `Missing Field is ${field}`,
        });
      }
    }
    const { name, email, message } = Databody;
    const newMessage = {
      name: name,
      email: email,
      message: message,
    };
    const newMsg = await ContactUs.create(newMessage);
    if (!newMsg) {
      console.log("---- Message Can't created ----");
      return res.status(401).json({
        status: false,
        message: "Message not created",
      });
    }
    console.log("---- Message Created Successfully ----");
    res.status(200).json({
      status: true,
      message: "Message Created Successfully",
    });
  } catch {
    console.log("---- /createMessage -- Internal Server Error ----");
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};
const getAllMessage = async (req, res) => {
  try {
    const allMessage = await ContactUs.find({});
    if (!allMessage) {
      console.log("---- Message Not Found ----");
      return res.status(401).json({
        status: false,
        message: "Message not found",
      });
    }
    console.log("---- Message Found Successfully ----");
    res.status(200).json({
      status: true,
      allMessage: allMessage,
    });
  } catch {
    console.log("---- Internal Server error ----");
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = { createNewMessage, getAllMessage };
