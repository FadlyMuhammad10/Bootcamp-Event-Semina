const express = require("express");
const router = express();
const { createCmsOrganizer, createCmsUsers } = require("./controllers");

const { authenticatedUser } = require("../../../middlewares/auth");

router.post("/organizers", createCmsOrganizer);
router.post("/users", authenticatedUser, createCmsUsers);

module.exports = router;
