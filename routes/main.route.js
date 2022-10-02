const router = require("express").Router();

const { getSummary } = require("../controllers/main.controller");

router.post("/summarize", getSummary);

module.exports = router;
