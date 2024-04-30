const router = require("express").Router();
const {
  getAllMessage,
  createNewMessage,
} = require("../controller/contactus.js");

router.get("/getAllMessage", getAllMessage);
router.post("/createMessage", createNewMessage);

module.exports = router;
