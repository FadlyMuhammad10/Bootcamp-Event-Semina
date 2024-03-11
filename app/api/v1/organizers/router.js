const express = require("express");
const router = express();
const { create } = require("./controllers");

router.post("/organizers", create);

module.exports = router;
