// const db = require("../db");

// exports.createItem = (data, callback) => {
//     const sql = "INSERT INTO items (name, price) VALUES (?, ?)";
//     db.query(sql, [data.name, data.price], callback);
// };

// exports.getItems = (callback) => {
//     db.query("SELECT * FROM items", callback);
// };

const db = require("../db");

exports.createItem = (data, callback) => {
    const sql = `
        INSERT INTO items 
        (ItemCode, ItemName, SellingPrice, IsActive) 
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [
        data.ItemCode,
        data.ItemName,
        data.SellingPrice,
        data.IsActive
    ], callback);
};

exports.getItems = (callback) => {
    db.query("SELECT * FROM items WHERE IsActive = 'Y'", callback);
};

// exports.getItemById = (req, res) => {
//     db.query("SELECT * FROM items WHERE ItemCode = ?", [req.params.id], (err, result) => {
//         if (err) return res.status(500).json(err);
//         res.json(result);
//     });
// };

// Get Item by ID
exports.getItemById = (id, callback) => {
    const sql = `SELECT * FROM items WHERE ItemCode = ?`;
    db.query(sql, [id], callback);
};