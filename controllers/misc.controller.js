if (process.env.NODE_ENV !== "production") require("dotenv").config();
const { ContactTelegramBot } = require("../services/misc.services");

module.exports = {
  ContactUsController: async (req, res) => {
    const chat_id = process.env.TELEGRAM_CHAT_ID;
    const { email, fullName, text, phone } = req.body;

    let fullText = `${text}\n\nā ā ā ā\n`;
    fullText += `Regards, ${fullName || "Anonymous"}\n`;
    fullText += email ? email : "";
    fullText += phone ? ` | ${phone}` : "";

    const payload = {
      chat_id,
      text: fullText,
    };

    const response = await ContactTelegramBot(payload);
    res.status(response.status).json(response);
  },
};
