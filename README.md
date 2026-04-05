# LogiEdge - Billing & Inventory Management System

## 📸 Screenshots

### 🖥️ Application Preview

<img src="Front-End%20App/dashboard/src/assets/Screenshot%201.png" width="600"/>
<img src="Front-End%20App/dashboard/src/assets/Screenshot%202.png" width="600"/>
<img src="Front-End%20App/dashboard/src/assets/Screenshot%203.png" width="600"/>
<img src="assets/Screenshot1.png" width="600"/>

## Prerequisites

- Node.js v16+
- MySQL 5.7+

## Setup

### 1. Database Setup

```sql
CREATE DATABASE Web_Dashboard;
USE Web_Dashboard;

CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  CustID VARCHAR(50) UNIQUE NOT NULL,
  CustName VARCHAR(255) NOT NULL,
  CustAddress TEXT,
  CustPAN VARCHAR(50),
  CustGST VARCHAR(50),
  isActive CHAR(1) DEFAULT 'Y'
);

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ItemCode VARCHAR(50) UNIQUE NOT NULL,
  ItemName VARCHAR(255) NOT NULL,
  SellingPrice DECIMAL(10, 2) NOT NULL,
  IsActive CHAR(1) DEFAULT 'Y'
);

CREATE TABLE invoices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  invoice_id VARCHAR(50) UNIQUE NOT NULL,
  customer_id INT NOT NULL,
  total_amount DECIMAL(12, 2),
  gst_amount DECIMAL(12, 2),
  final_amount DECIMAL(12, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE invoice_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  invoice_id INT NOT NULL,
  item_code VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (invoice_id) REFERENCES invoices(id)
);
```

### 2. Backend Setup

```bash
cd "Back-End Server"
npm install
node server.js
# Server runs on http://localhost:5000
```

### 3. Frontend Setup

```bash
cd "Front-End App/dashboard"
npm install
npm run dev
# App runs on http://localhost:5173
```

## API Endpoints

**Base URL:** `http://localhost:5000`

### Customers
```
POST   /customers          - Add customer
GET    /customers          - Get all customers
GET    /customers/:id      - Get customer by ID
```

### Items
```
POST   /items              - Add item
GET    /items              - Get all items
GET    /items/:id          - Get item by code
```

### Invoices
```
POST   /invoices           - Create invoice
GET    /invoices           - Get all invoices
GET    /invoices/dashboard - Get dashboard data
GET    /invoices/:id       - Get invoice details
```

## Test API

```bash
# Get all customers
curl.exe http://localhost:5000/customers

# Get all items
curl.exe http://localhost:5000/items

# Get dashboard
curl.exe http://localhost:5000/invoices/dashboard
```

## Frontend Pages

```
/                 - Home page
/dashboard        - View all invoices
/customers        - Customer list
/add-customer     - Add new customer
/items            - Items/inventory list
/add-item         - Add new item
/billing          - Create new invoice
/invoice/:id      - View invoice details
```

# Open browser
http://localhost:5173/
```


