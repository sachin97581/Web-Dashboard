const express = require("express");
const router = express.Router();
const controller = require("../controllers/customerController");

router.post("/", controller.addCustomer);
router.get("/", controller.getCustomers);
// Get customer by ID (optional)
router.get("/:id", controller.getCustomerById);

module.exports = router;