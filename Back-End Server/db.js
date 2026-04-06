const mysql = require("mysql2");
require("dotenv").config();

// const db = mysql.createConnection({
//   // host: process.env.DB_HOST,
//   // user: process.env.DB_USER,
//   // password: process.env.DB_PASSWORD,
//   // database: process.env.DB_NAME
//   host: process.env.MYSQLHOST,
// user: process.env.MYSQLUSER,
// password: process.env.MYSQLPASSWORD,
// database: process.env.MYSQLDATABASE,
// port: process.env.MYSQLPORT

// });

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect((err) => {
  if (err) {
    console.error("DB Error:", err.message);
    console.log(err);
    return;
  }
  console.log("DB Connected");
});

module.exports = db;