const express = require("express");
const router = express.Router();

// ========= Pages =========

// FAQ page
router.get("/faq", (_req, res) => {
  res.render("faq");
});

// Homepage
router.get("/homepage", (_req, res) => {
  res.render("homepage", { title: "Home" });
});

module.exports = router;