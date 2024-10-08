const express = require("express");
const router = express();
const { index } = require("./controllers");
const {
  authenticatedUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.get(
  "/orders",
  authenticatedUser,
  authorizeRoles("organizer", "admin", "owner"),
  index
);

module.exports = router;
