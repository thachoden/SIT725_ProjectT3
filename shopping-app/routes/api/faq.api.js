const express = require("express");

const router = express.Router();

// ========= Controllers =========
const faqController = require("../../controllers/faq.controller");
const faqFeedbackController = require("../../controllers/faqFeedback.controller");

// ========= FAQ APIs =========

// FAQs list
router.get("/faqs", faqController.getFaqs);

// FAQ feedback (MongoDB)
router.post("/faq-feedback", faqFeedbackController.createFaqFeedback);
router.get("/faq-feedback", faqFeedbackController.getFaqFeedback);

module.exports = router;