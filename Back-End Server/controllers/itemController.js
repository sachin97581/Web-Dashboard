const itemModel = require("../models/itemModel");

exports.addItem = (req, res) => {
    itemModel.createItem(req.body, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Item added successfully" });
    });
};

exports.getItems = (req, res) => {
    itemModel.getItems((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// // 🔹 Get Item by ID (Optional)
// exports.getItemById = (req, res) => {
//     const id = req.params.id;

//     const sql = `SELECT * FROM items WHERE ItemCode = ?`;

//     db.query(sql, [id], (err, result) => {
//         if (err) {
//             console.error("Error fetching item:", err);
//             return res.status(500).json(err);
//         }

//         if (result.length === 0) {
//             return res.status(404).json({ message: "Item not found" });
//         }

//         res.json(result[0]);
//     });
// };

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