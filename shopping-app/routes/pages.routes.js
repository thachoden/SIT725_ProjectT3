const express = require("express");
const router = express.Router();

router.get("/cart", (req, res) => res.render("cart"));
router.get("/checkout", (req, res) => res.render("checkout"));
router.get("/confirmation", (req, res) => res.render("confirmation"));
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