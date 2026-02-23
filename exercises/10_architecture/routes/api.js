const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const tokenAuth = require("../middleware/tokenAuthMiddleware");

router.post("/api/login", apiController.login);

router.get("/api/events", tokenAuth, apiController.all);
router.get("/api/events/:id", tokenAuth, apiController.show);
router.put("/api/events/:id", tokenAuth, apiController.update);

module.exports = router;
