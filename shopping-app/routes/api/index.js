const express = require("express");

const router = express.Router();

// ========= API Route Imports =========
const faqApi = require("./faq.api");

// ========= API Route Mounting =========

// FAQ APIs
router.use("/faq", faqApi);


module.exports = router;