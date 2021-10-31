module.exports = {
  WelcomeMessage: () => {
    return {
      status: "501",
      message: "Feature not implemented",
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
