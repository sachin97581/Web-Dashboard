const db = require("../db");
const customerModel = require("../models/customerModel");


// add new customer
exports.addCustomer = (req, res) => {
  const { CustName, CustAddress, CustPAN, CustGST, isActive } = req.body;

  //Step 1: Get last customer ID
  const getLastId = `
    SELECT CustID FROM customers ORDER BY CustID DESC LIMIT 1
  `;

  db.query(getLastId, (err, result) => {
    if (err) return res.status(500).json(err);

    let newCustID = "C00001";

    if (result.length > 0) {
      const lastId = result[0].CustID;
      const num = parseInt(lastId.slice(1)) + 1;
      newCustID = "C" + num.toString().padStart(5, "0");
    }

    // Step 2: Prepare data
    const data = {
      CustID: newCustID,
      CustName,
      CustAddress,
      CustPAN,
      CustGST,
      isActive,
    };

    //Step 3: Call model
    customerModel.createCustomer(data, (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Customer added successfully",
        CustID: newCustID,
      });
    });
  });
};

// get all customers
exports.getCustomers = (req, res) => {
    customerModel.getCustomers((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};


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