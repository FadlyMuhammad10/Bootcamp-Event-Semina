const express = require("express");
const router = express.Router();

const { create } = require("./controllers");

const upload = require("../../../middlewares/multer");

router.post("/images", upload.single("avatar"), create);

module.exports = router;
