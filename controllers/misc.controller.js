const { ContactTelegramBot } = require("../services/misc.services");

module.exports = {
  ContactUsController: (req, res) => {
    // const { email, fullName, text, phone } = req;
    const response = ContactTelegramBot();
    res.status(response.status).json(response);
  },
};
