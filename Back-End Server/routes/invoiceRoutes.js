const express = require("express");
const router = express.Router();
const controller = require("../controllers/invoiceController");

router.post("/", controller.createInvoice);
router.get("/", controller.getInvoices);
// router.get("/:id", controller.getInvoiceById);
router.get("/dashboard", controller.getDashboardData); 
router.get("/:id", controller.getInvoiceDetails);     

module.exports = router;