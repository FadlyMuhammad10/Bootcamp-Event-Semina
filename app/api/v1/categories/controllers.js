const { StatusCodes } = require("http-status-codes");

const {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
} = require("../../../services/mongoose/categories");

module.exports = {
  create: async (req, res, next) => {
    try {
      const result = await createCategories(req);
      res.status(StatusCodes.CREATED).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
  index: async (req, res, next) => {
    try {
      const result = await getAllCategories();
      res.status(StatusCodes.OK).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
  find: async (req, res, next) => {
    try {
      const result = await getOneCategories(req);

      res.status(StatusCodes.OK).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const result = await updateCategories(req);

      res.status(StatusCodes.OK).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
  destroy: async (req, res, next) => {
    try {
      const result = await deleteCategories(req);

      res.status(StatusCodes.OK).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
};
