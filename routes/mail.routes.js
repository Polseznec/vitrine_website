const router = require("express").Router();
const mailController = require("../controllers/mail.controlller");

require("dotenv").config({
  path: "./config/.env",
});

router.post("/send", mailController.sendEmail);

module.exports = router;
