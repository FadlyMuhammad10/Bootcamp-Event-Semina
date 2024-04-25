const { StatusCodes } = require("http-status-codes");

const {
  createOrganizer,
  createUsers,
  getAllUsers,
} = require("../../../services/mongoose/users");

module.exports = {
  createCmsOrganizer: async (req, res, next) => {
    try {
      const result = await createOrganizer(req);
      res.status(StatusCodes.CREATED).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
  createCmsUsers: async (req, res, next) => {
    try {
      const result = await createUsers(req);
      res.status(StatusCodes.CREATED).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllCmsUsers: async (req, res, next) => {
    try {
      const result = await getAllUsers(req);
      res.status(StatusCodes.OK).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
};
