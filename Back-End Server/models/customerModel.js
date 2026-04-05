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


// get all customers
exports.getCustomers = (callback) => {
    // db.query("SELECT * FROM customers WHERE isActive = 'Y'", callback);
    db.query("SELECT * FROM customers", callback);
};

// Get Customer by ID
exports.getCustomerById = (id, callback) => {
    const sql = `SELECT * FROM customers WHERE CustID = ?`;
    db.query(sql, [id], callback);
};