import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import Sidebar from "../components/Sidebar";
import "../styles/invoicedetails.css";

function InvoiceDetails() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    API.get(`/invoices/${id}`).then((res) => setInvoice(res.data));
  }, [id]);

  if (!invoice) return <h2>Loading...</h2>;

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h2>Invoice Details</h2>

        {/* Customer Section */}
        <div className="section">
          <div className="section-header">
            <h3>Customer Details</h3>
            <span>Invoice ID: {invoice.invoice_id}</span>
          </div>

          <p>Name : {invoice.customer_name}</p>
          <p>Address : {invoice.address}</p>
          <p>PAN : {invoice.pan}</p>
          <p>GST : {invoice.gst}</p>
        </div>

        {/* Items */}
        <div className="section">
          <h3>Items</h3>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {invoice.items.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total: ₹ {invoice.total}</h3>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;