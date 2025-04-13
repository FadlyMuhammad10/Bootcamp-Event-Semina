const { StatusCodes } = require("http-status-codes");

const { signIn } = require("../../../services/mongoose/auth");

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await signIn(req);
      res.status(StatusCodes.CREATED).json({
        data: { token: result.token, role: result.role },
      });
    } catch (error) {
      next(error);
    }
  },
};
