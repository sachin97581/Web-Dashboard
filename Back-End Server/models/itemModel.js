const db = require("../db");


// create items
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

// get all items
exports.getItems = (callback) => {
    // db.query("SELECT * FROM items WHERE IsActive = 'Y'", callback);
    db.query("SELECT * FROM items", callback);
};


// Get Item by ID
exports.getItemById = (id, callback) => {
    const sql = `SELECT * FROM items WHERE ItemCode = ?`;
    db.query(sql, [id], callback);
};