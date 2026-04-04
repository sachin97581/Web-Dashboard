// const db = require("../db");

// exports.createCustomer = (data, callback) => {
//     const sql = "INSERT INTO customers (name, email, phone, is_gst_registered) VALUES (?, ?, ?, ?)";
//     db.query(sql, [data.name, data.email, data.phone, data.is_gst_registered], callback);
// };

// exports.getCustomers = (callback) => {
//     db.query("SELECT * FROM customers", callback);
// };

const db = require("../db");

exports.createCustomer = (data, callback) => {
    const sql = `
        INSERT INTO customers 
        (CustID, CustName, CustAddress, CustPAN, CustGST, isActive) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        data.CustID,
        data.CustName,
        data.CustAddress,
        data.CustPAN,
        data.CustGST,
        data.isActive
    ], callback);
};

exports.getCustomers = (callback) => {
    db.query("SELECT * FROM customers WHERE isActive = 'Y'", callback);
};

// exports.getCustomerById = (req, res) => {
//     db.query("SELECT * FROM customers WHERE CustID = ?", [req.params.id], (err, result) => {
//         if (err) return res.status(500).json(err);
//         res.json(result);
//     });
// };.

// Get Customer by ID
exports.getCustomerById = (id, callback) => {
    const sql = `SELECT * FROM customers WHERE CustID = ?`;
    db.query(sql, [id], callback);
};