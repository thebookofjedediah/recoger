const express = require("express");
const router = express.Router();
const chargeController = require("../controllers/chargeController");
const validation = require("./validation");

router.get("/charges", chargeController.index);
router.post("/charges/create", chargeController.create);

module.exports = router;
