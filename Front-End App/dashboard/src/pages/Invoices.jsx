import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import "../styles/invoices.css";

function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/invoices").then((res) => setInvoices(res.data));
  }, []);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h2>Invoices</h2>

        <div className="card-container">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="invoice-card"
              onClick={() => navigate(`/invoice/${inv.id}`)}
            >
              <div className="invoice-header">
                <h3>{inv.invoice_id}</h3>
                <span className="amount">₹ {inv.final_amount}</span>
              </div>

              <p><strong>Customer:</strong> {inv.customer_id}</p>
              <p><strong>Total:</strong> ₹ {inv.total_amount}</p>
              <p><strong>GST:</strong> ₹ {inv.gst_amount}</p>

              <p className="date">
                {new Date(inv.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Invoices;