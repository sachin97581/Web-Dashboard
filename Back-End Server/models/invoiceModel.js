const db = require("../db");


// create invoice
exports.createInvoice = (invoiceData, items, callback) => {
    const sql = `
        INSERT INTO invoices 
        (invoice_id, customer_id, total_amount, gst_amount, final_amount) 
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        invoiceData.invoice_id,
        invoiceData.customer_id,
        invoiceData.total_amount,
        invoiceData.gst_amount,
        invoiceData.final_amount
    ], (err, result) => {
        if (err) return callback(err);

        const invoiceId = result.insertId;

        const itemQueries = items.map(item => {
            return new Promise((resolve, reject) => {
                const sqlItem = `
                    INSERT INTO invoice_items 
                    (invoice_id, item_code, quantity, price, total)
                    VALUES (?, ?, ?, ?, ?)
                `;

                db.query(sqlItem, [
                    invoiceId,
                    item.item_code,
                    item.quantity,
                    item.price,
                    item.total
                ], (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });
        });

        Promise.all(itemQueries)
            .then(() => callback(null, result))
            .catch(err => callback(err));
    });
};

// get all invoices
exports.getAllInvoices = (callback) => {
    db.query("SELECT * FROM invoices ORDER BY created_at DESC", callback);
};

// get invoice by ID with items
exports.getInvoiceById = (invoice_id, callback) => {
    const sql = `
        SELECT 
            i.invoice_id,
            i.customer_id,
            i.total_amount,
            i.gst_amount,
            i.final_amount,
            ii.item_code,
            it.ItemName AS item_name,
            ii.quantity,
            ii.price,
            ii.total
        FROM invoices i
        LEFT JOIN invoice_items ii ON i.id = ii.invoice_id
        LEFT JOIN items it ON ii.item_code = it.ItemCode
        WHERE i.invoice_id = ?
    `;

    db.query(sql, [invoice_id], callback);
};