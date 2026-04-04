const invoiceModel = require("../models/invoiceModel");
const db = require("../db");

function generateInvoiceId() {
    const random = Math.floor(100000 + Math.random() * 900000);
    return `INVC${random}`;
}

exports.createInvoice = (req, res) => {
    const { customer_id, items } = req.body;

    db.query("SELECT * FROM customers WHERE CustID = ?", [customer_id], (err, customerResult) => {
        if (err) {
            console.error("DB Error:", err);
            return res.status(500).json(err);
        }

        // ✅ Check if customer exists
        if (!customerResult || customerResult.length === 0) {
            return res.status(404).json({ message: "Customer not found" });
        }

        const customer = customerResult[0];

        let total_amount = 0;

        const updatedItems = items.map(item => {
            const total = item.price * item.quantity;
            total_amount += total;
            return { ...item, total };
        });

        let gst_amount = 0;

        // ✅ GST logic
        if (!customer.CustGST || customer.CustGST.trim() === "") {
            gst_amount = total_amount * 0.18;
        }

        const final_amount = total_amount + gst_amount;

        const invoiceData = {
            invoice_id: generateInvoiceId(),
            customer_id,
            total_amount,
            gst_amount,
            final_amount
        };

        invoiceModel.createInvoice(invoiceData, updatedItems, (err) => {
            if (err) {
                console.error("Invoice Insert Error:", err);
                return res.status(500).json(err);
            }

            res.json({
                message: "Invoice created successfully",
                invoice: invoiceData
            });
        });
    });
};

// exports.createInvoice = (req, res) => {
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

exports.getInvoices = (req, res) => {
    invoiceModel.getAllInvoices((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getInvoiceById = (req, res) => {
    invoiceModel.getInvoiceById(req.params.id, (err, results) => {
        if (err) return res.status(500).json(err);
        console.log("Invoice by ID Result:", results);
        res.json(results);
    });
};