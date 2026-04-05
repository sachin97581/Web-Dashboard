const invoiceModel = require("../models/invoiceModel");
const db = require("../db");

function generateInvoiceId() {
    const random = Math.floor(100000 + Math.random() * 900000);
    return `INVC${random}`;
}


exports.createInvoice = (req, res) => {
  const { customer_id, items } = req.body;

  //Step 1: Get last invoice ID
  const getLastInvoice = `
    SELECT invoice_id FROM invoices ORDER BY invoice_id DESC LIMIT 1
  `;

  db.query(getLastInvoice, (err, invResult) => {
    if (err) return res.status(500).json(err);

    let newInvoiceId = "INVC00001";

    if (invResult.length > 0) {
      const lastId = invResult[0].invoice_id;
      const num = parseInt(lastId.slice(4)) + 1;
      newInvoiceId = "INVC" + num.toString().padStart(5, "0");
    }

    // Step 2: Get customer
    db.query(
      "SELECT * FROM customers WHERE CustID = ?",
      [customer_id],
      (err, customerResult) => {
        if (err) return res.status(500).json(err);

        if (!customerResult || customerResult.length === 0) {
          return res.status(404).json({ message: "Customer not found" });
        }

        const customer = customerResult[0];

        let total_amount = 0;

        const updatedItems = items.map((item) => {
          const total = item.price * item.quantity;
          total_amount += total;
          return { ...item, total };
        });

        let gst_amount = 0;

        // GST logic
        if (!customer.CustGST || customer.CustGST.trim() === "") {
          gst_amount = total_amount * 0.18;
        }

        const final_amount = total_amount + gst_amount;

        const invoiceData = {
          invoice_id: newInvoiceId,
          customer_id,
          total_amount,
          gst_amount,
          final_amount,
        };

        // Insert invoice
        invoiceModel.createInvoice(invoiceData, updatedItems, (err) => {
          if (err) return res.status(500).json(err);

          res.json({
            message: "Invoice created successfully",
            invoice: invoiceData,
          });
        });
      }
    );
  });
};


//     const { customer_id, items } = req.body;

//     db.query("SELECT * FROM customers WHERE id = ?", [customer_id], (err, customerResult) => {
//         if (err) return res.status(500).json(err);
//         console.log("Customer Result:", customerResult);
//         console.log("Customer line 16 erro:", err);
//         const customer = customerResult[0];

//         let total_amount = 0;

//         const updatedItems = items.map(item => {
//             const total = item.price * item.quantity;
//             total_amount += total;
//             return { ...item, total };
//         });

//         // let gst_amount = 0;

//         // if (!customer.is_gst_registered) {
//         //     gst_amount = total_amount * 0.18;
//         // }

//         let gst_amount = 0;

//         // Apply GST only if customer does NOT have GST number
//         if (!customer.CustGST || customer.CustGST.trim() === "") {
//             gst_amount = total_amount * 0.18;
//         }

//         const final_amount = total_amount + gst_amount;

//         const invoiceData = {
//             invoice_id: generateInvoiceId(),
//             customer_id,
//             total_amount,
//             gst_amount,
//             final_amount
//         };

//         invoiceModel.createInvoice(invoiceData, updatedItems, (err) => {
//             if (err) return res.status(500).json(err);
//             console.log("line 51 Invoice erro:", err);
//             res.json({
//                 message: "Invoice created",
//                 invoice: invoiceData
//             });
//         });
//     });
// };
//get all invoices
exports.getInvoices = (req, res) => {
    invoiceModel.getAllInvoices((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};


// get invoice by ID
exports.getInvoiceById = (req, res) => {
    invoiceModel.getInvoiceById(req.params.id, (err, results) => {
        if (err) return res.status(500).json(err);
        console.log("Invoice by ID Result:", results);
        res.json(results);
    });
};

exports.getDashboardData = async (req, res) => {
  try {
     const sql = `
    SELECT 
        i.id,
        i.invoice_id,
        c.CustName AS customer_name,
        SUM(it.SellingPrice * ii.quantity) AS total,
        GROUP_CONCAT(it.ItemName SEPARATOR ', ') AS item_names
    FROM invoices i
    JOIN customers c ON i.customer_id = c.CustID
    JOIN invoice_items ii ON ii.invoice_id = i.id
    JOIN items it ON it.ItemCode = ii.item_code
    GROUP BY i.id
    ORDER BY i.id DESC
    `;

    db.query(sql, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};


// Get detailed invoice info for invoice page
exports.getInvoiceDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const sql = `
      SELECT 
        i.invoice_id,
        c.CustName AS customer_name,
        c.CustAddress AS address,
        c.CustPAN AS pan,
        c.CustGST AS gst,
        it.ItemName AS item_name,
        ii.quantity,
        ii.price
      FROM invoices i
      JOIN customers c ON i.customer_id = c.CustID
      JOIN invoice_items ii ON ii.invoice_id = i.id
      JOIN items it ON it.ItemCode = ii.item_code
      WHERE i.id = ?
    `;

    db.query(sql, [id], (err, result) => {
      if (err) return res.status(500).json(err);
      if (!result || result.length === 0) {
        return res.status(404).json({ message: "Invoice not found" });
      }

      const invoice = {
        invoice_id: result[0].invoice_id,
        customer_name: result[0].customer_name,
        address: result[0].address,
        pan: result[0].pan,
        gst: result[0].gst,
        items: [],
        total: 0,
      };

      result.forEach((row) => {
        const amount = row.price * row.quantity;

        invoice.items.push({
          name: row.item_name,
          quantity: row.quantity,
          price: row.price,
          amount,
        });

        invoice.total += amount;
      });

      res.json(invoice);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};