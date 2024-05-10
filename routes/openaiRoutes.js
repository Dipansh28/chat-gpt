const express = require("express");
const { summaryController } = require("../controllers/openaiControllers");

const router = express.Router();

//route
router.post("/summary", summaryController);

module.exports = router;
