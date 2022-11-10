const router = require("express").Router();

const { getSummary } = require("../controller/main.controller");

router.post("/summarize", getSummary);

module.exports = router;
