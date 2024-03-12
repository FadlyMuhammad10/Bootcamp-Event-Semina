const express = require("express");
const router = express.Router();

const { create, index, find, update, destroy } = require("./controllers");

const {
  authenticatedUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.get(
  "/categories",
  authenticatedUser,
  authorizeRoles("organizer"),
  index
);
router.get(
  "/categories/:id",
  authenticatedUser,
  authorizeRoles("organizer"),
  find
);
router.post(
  "/categories",
  authenticatedUser,
  authorizeRoles("organizer"),
  create
);
router.put(
  "/categories/:id",
  authenticatedUser,
  authorizeRoles("organizer"),
  update
);
router.delete(
  "/categories/:id",
  authenticatedUser,
  authorizeRoles("organizer"),
  destroy
);

module.exports = router;
