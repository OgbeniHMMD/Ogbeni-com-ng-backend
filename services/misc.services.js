require("dotenv").config();

module.exports = {
  ContactTelegramBot: async (payload) => {
    const axios = require("axios");
    let response = {
      status: 500,
      message:
        "I'm Sorry, your message couldn't be delivered because of a technical issue. Please try again in a moment",
    };

    const url = `https://api.telegram.org/${process.env.TELEGRAM_API_KEY}/sendMessage`;

    await axios
      .post(url, payload)
      .then((res) => {
        response = {
          status: 200,
          message: "Message delivered. Thank you for getting in touch with me!",
        };
      })
      .catch((error) => {
        response = {
          status: 400,
          message:
            "I'm Sorry, your message couldn't be delivered because of a technical issue. Please try again in a moment",
          description: error?.response?.data?.description,
        };
      });

    return response;
  },
};
