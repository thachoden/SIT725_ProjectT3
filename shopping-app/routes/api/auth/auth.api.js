const express = require("express");
const router = express.Router();

// ========= Controllers =========
const authController = require("../../../controllers/auth.controller");

// ========= Authentication APIs =========
router.post("/login", authController.verifyLogin);

module.exports = router;