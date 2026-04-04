require("dotenv").config();

const express = require("express");
const cors = require("cors");

const customerRoutes = require("./routes/customerRoutes");
const itemRoutes = require("./routes/itemRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/customers", customerRoutes);
app.use("/items", itemRoutes);
app.use("/invoices", invoiceRoutes);

app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




// // Import packages
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");


// // Import DB connection
// const db = require("./db");

// // Create app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Test route
// app.get("/", (req, res) => {
//     res.send("Server is running 🚀");
// });

// // Port
// const PORT = process.env.PORT || 5000;

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });