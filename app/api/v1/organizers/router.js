const express = require("express");
const router = express();
const {
  createCmsOrganizer,
  createCmsUsers,
  getAllCmsUsers,
} = require("./controllers");

const {
  authenticatedUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.post(
  "/organizers",
  authenticatedUser,
  authorizeRoles("owner"),
  createCmsOrganizer
);
router.post(
  "/users",
  authenticatedUser,
  authorizeRoles("organizer"),
  createCmsUsers
);
router.get(
  "/users",
  authenticatedUser,
  authorizeRoles("owner"),
  getAllCmsUsers
);

module.exports = router;
