
const express = require("express");
const router = express.Router();

const adminFeedbackController = require("../controllers/adminFeedback.controller");

// ✅ no auth, direct access for demo
router.get("/feedbacks", adminFeedbackController.renderFeedbacks);
router.post("/feedbacks/:id/status", adminFeedbackController.updateFeedbackStatus);
router.post("/feedbacks/:id/delete", adminFeedbackController.softDeleteFeedback);

module.exports = router;
