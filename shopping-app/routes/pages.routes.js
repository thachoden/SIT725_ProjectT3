const express = require("express");
const router = express.Router();

// ========= Pages =========

// FAQ page
router.get("/faq", (req, res) => {
  res.render("faq");
});

// Homepage
router.get("/homepage", async (req, res) => {
  try {
    // Fetch categories from API
    const response = await fetch('http://localhost:5000/api/resource/product-category');
    
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }

    const categories = await response.json();

    // Pass categories to homepage.ejs
    res.render("homepage", { 
      title: "Home",
      categories: categories 
    });

  } catch (error) {
    console.error('Error fetching categories:', error);
    
    // Render with empty categories if API fails
    res.render("homepage", { 
      title: "Home",
      categories: [] 
    });
  }
});

//Account
router.get("/account", (req, res) => {
  res.render("account", {
    title: "My Account",
    activePage: "profile",
    user: { firstName: "John", lastName: "Doe", email: "john.doe@email.com", address: "123 Collins Street, Melbourne" }
  });
});

router.get("/account/address", (req, res) => {
  res.render("account-address", {
    title: "Address Book",
    activePage: "address",
    user: { firstName: "John", lastName: "Doe" },
    address: { line1: "123 Collins Street", city: "Melbourne", state: "VIC", postcode: "3000", country: "Australia" }
  });
});

router.get("/account/payment", (req, res) => {
  res.render("account-payment", {
    title: "My Payment Options",
    activePage: "payment",
    user: { firstName: "John", lastName: "Doe" },
    payment: { type: "Card", last4: "1234", name: "John Doe", expiry: "12/34" }
  });
});

// Cart page
router.get("/cart", (req, res) => {
  res.render("cart");
});

// Checkout page
router.get("/checkout", (req, res) => {
  res.render("checkout");
});

// Confirmation page
router.get("/confirmation", (req, res) => {
  res.render("confirmation");
});

module.exports = router;