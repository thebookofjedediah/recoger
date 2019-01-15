const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const validation = require("./validation");

router.get("/events", eventController.index);
router.post("/events/create", eventController.create);
router.get("/event/:id", eventController.show);
// router.post("/events/:id/destroy", eventController.destroy);
// router.get("/events/:id/edit", eventController.edit);
// router.post("/events/:id/update", eventController.update);

module.exports = router;
