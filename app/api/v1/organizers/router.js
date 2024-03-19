const express = require("express");
const router = express();
const { createCmsOrganizer, createCmsUsers } = require("./controllers");

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

module.exports = router;
