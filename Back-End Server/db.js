// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "sat@0752",
//   database: "Web_Dashboard"
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log("DB Connected");
// });

// module.exports = db;

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB Error:", err.message);
    return;
  }
  console.log("✅ DB Connected");
});

module.exports = db;