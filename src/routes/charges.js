const express = require("express");
const router = express.Router();
const chargeController = require("../controllers/eventController");
const validation = require("./validation");

router.get("/charges", chargeController.index);
router.post("/charges/create", chargeController.create);
router.get("/charges/:id", chargeController.show);
// router.post("/events/:id/destroy", eventController.destroy);
// router.get("/events/:id/edit", eventController.edit);
// router.post("/events/:id/update", eventController.update);

module.exports = router;
