const {
  NotImplemented,
  WelcomeMessage,
  ResourceNotFound,
} = require("../services/util.services");

module.exports = {
  WelcomeController: (req, res) => {
    // const { email, fullName, text, phone } = req;
    const response = WelcomeMessage();
    res.status(response.status).json(response);
  },

  ResourceNotFoundController: (req, res) => {
    // const { email, fullName, text, phone } = req;
    const response = ResourceNotFound(req);
    res.status(response.status).json(response);
  },

  NotImplementedController: (req, res) => {
    // const { email, fullName, text, phone } = req;
    const response = NotImplemented();
    res.status(response.status).json(response);
  },
};
