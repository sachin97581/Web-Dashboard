const customerModel = require("../models/customerModel");

exports.addCustomer = (req, res) => {
    customerModel.createCustomer(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Customer added successfully" });
    });
};

exports.getCustomers = (req, res) => {
    customerModel.getCustomers((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// exports.getCustomerById = (req, res) => {
//     customerModel.getCustomerById(req, res);
// };


// 🔹 Get Customer by ID (Optional but useful)
// exports.getCustomerById = (req, res) => {
//     const id = req.params.id;

//     const sql = `SELECT * FROM customers WHERE CustID = ?`;

//     db.query(sql, [id], (err, result) => {
//         if (err) {
//             console.error("Error fetching customer:", err);
//             return res.status(500).json(err);
//         }

//         if (result.length === 0) {
//             return res.status(404).json({ message: "Customer not found" });
//         }

//         res.json(result[0]);
//     });
// };.

// Get Customer by ID
exports.getCustomerById = (req, res) => {
    customerModel.getCustomerById(req.params.id, (err, result) => {
        if (err) {
            console.error("Fetch Error:", err);
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.json(result[0]);
    });
};