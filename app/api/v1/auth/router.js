const express = require("express");
const router = express();
const { create } = require("./controllers");

router.post("/auth/signin", create);

module.exports = router;
