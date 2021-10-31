require("dotenv").config();
const { ContactTelegramBot } = require("../services/misc.services");

module.exports = {
  ContactUsController: async (req, res) => {
    const chat_id = process.env.TELEGRAM_CHAT_ID;
    // const { email, fullName, text, phone } = req;

    const payload = {
      chat_id,
      text: "Hello, Ogbeni",
    };

    const response = await ContactTelegramBot(payload);
    res.status(response.status).json(response);
  },
};
