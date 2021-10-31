const misc = require("../services/misc.services");

module.exports = {
  ContactUsController: (req, res) => {
    // const { email, fullName, text, phone } = req;
    const response = misc.NotImplemented();
    res.status(response.status).json(response);
  },
};
