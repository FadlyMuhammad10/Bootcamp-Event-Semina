const { createImages } = require("../../../services/mongoose/images");
const { StatusCodes } = require("http-status-codes");

module.exports = {
  create: async (req, res, next) => {
    try {
      console.log("req file");
      console.log(req.file);
      const result = await createImages(req);
      res.status(StatusCodes.CREATED).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
};
