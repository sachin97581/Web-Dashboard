const express = require("express");
const router = express.Router();
const controller = require("../controllers/itemController");

router.post("/", controller.addItem);
router.get("/", controller.getItems);
// Get item by ID (optional)
router.get("/:id", controller.getItemById);

module.exports = router;