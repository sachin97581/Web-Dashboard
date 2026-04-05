const db = require("../db");
const itemModel = require("../models/itemModel");

// add new item
exports.addItem = (req, res) => {
  const { ItemName, SellingPrice, IsActive } = req.body;

  // Step 1: Get last item code
  const getLastId = `
    SELECT ItemCode FROM items ORDER BY ItemCode DESC LIMIT 1
  `;

  db.query(getLastId, (err, result) => {
    if (err) return res.status(500).json(err);

    let newItemCode = "IT00001";

    if (result.length > 0) {
      const lastId = result[0].ItemCode;
      const num = parseInt(lastId.slice(2)) + 1;
      newItemCode = "IT" + num.toString().padStart(5, "0");
    }

    // Step 2: Prepare data
    const data = {
      ItemCode: newItemCode,
      ItemName,
      SellingPrice,
      IsActive,
    };

    //  Step 3: Insert
    itemModel.createItem(data, (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Item added successfully",
        ItemCode: newItemCode,
      });
    });
  });
};

// get all items
exports.getItems = (req, res) => {
    itemModel.getItems((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};


// Get Item by ID
exports.getItemById = (req, res) => {
    itemModel.getItemById(req.params.id, (err, result) => {
        if (err) {
            console.error("Fetch Error:", err);
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.json(result[0]);
    });
};