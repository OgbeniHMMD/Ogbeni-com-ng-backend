module.exports = {
  WelcomeMessage: () => {
    return {
      status: 200,
      docs: "",
      author: "hmmd@ogbeni.com.ng",
    };
  },

  /* Capture ALL 404 errors */
  ResourceNotFound: (req) => {
    return {
      message: "Resource not found",
      verb: req.method,
      status: 404,
    };
  },

  NotImplemented: () => {
    return {
      message: "Feature not implemented",
      status: 501,
    };
  },
};
