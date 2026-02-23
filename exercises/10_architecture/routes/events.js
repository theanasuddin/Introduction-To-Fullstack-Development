const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const sessionAuth = require("../middleware/sessionAuthMiddleware");

router.get("/events", sessionAuth, eventController.all);
router.get("/events/create", sessionAuth, eventController.create);
router.post("/events", sessionAuth, eventController.store);
router.get("/events/:id", sessionAuth, eventController.edit);
router.post("/events/:id", sessionAuth, eventController.update);
router.post("/events/:id/delete", sessionAuth, eventController.delete);

module.exports = router;
