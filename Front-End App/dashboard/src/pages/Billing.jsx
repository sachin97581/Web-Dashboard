import { useState } from "react";
import Sidebar from "../components/Sidebar";
import CustomerModal from "../components/CustomerModal";
import ItemModal from "../components/ItemModal";
import API from "../api/api";
import "../styles/billing.css";

function Billing() {
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);

  const [customer, setCustomer] = useState(null);
  const [items, setItems] = useState([]);

  const handleCreateInvoice = async () => {
    try {
      const res = await API.post("/invoices", {
        customer_id: customer.CustID,
        items,
      });

      alert("Invoice Created ✅");
      // console.log(res.data);

    } catch (err) {
      // console.log(err);
      alert("Error creating invoice");

    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h2>Billing</h2>

        {/* CUSTOMER */}
        <div className="section">
          <div className="section-header">
            <h3>Customer Details</h3>
          </div>

          {!customer ? (
            <button onClick={() => setShowCustomerModal(true)}>+ ADD</button>
          ) : (
            <div className="details">
              <p>Name: {customer.CustName}</p>
              <p>Address: {customer.CustAddress}</p>
              <p>PAN: {customer.CustPAN}</p>
              <p>GST: {customer.CustGST}</p>
            </div>
          )}
        </div>

        {/* ITEMS */}
        {/* {customer && (
          <div className="section">
            <h3>Items</h3>

            <button onClick={() => setShowItemModal(true)}>+ ADD</button>

            {items.map((item, i) => (
              <div key={i} className="item-row">
                {item.name} - {item.quantity} × {item.price}
              </div>
            ))}
          </div>
        )} */}

        {/* ITEMS */}
{customer && (
  <div className="section">
    <h3>Items</h3>

    <button onClick={() => setShowItemModal(true)}>+ ADD</button>

    {items.length > 0 && (
      <table className="billing-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>

              {/*  Quantity Controls */}
              <td>
                <button
                  onClick={() => {
                    const updated = [...items];
                    if (updated[index].quantity > 1) {
                      updated[index].quantity--;
                      setItems(updated);
                    }
                  }}
                >
                  -
                </button>

                <span className="qty">{item.quantity}</span>

                <button
                  onClick={() => {
                    const updated = [...items];
                    updated[index].quantity++;
                    setItems(updated);
                  }}
                >
                  +
                </button>
              </td>

              {/* Amount */}
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}

    {/* TOTAL */}
    <h3>
      Total: ₹{" "}
      {items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )}
    </h3>
  </div>
)}

        {/* CREATE BUTTON */}
        {/* {items.length > 0 && (
          <button className="create-btn" onClick={handleCreateInvoice}>
            Create Invoice
          </button>
        )} */}

        {/* ACTION BUTTONS */}
{items.length > 0 && (
  <div className="btn-group">
    <button
      className="cancel-btn"
      onClick={() => {
        setCustomer(null);
        setItems([]);
      }}
    >
      Cancel
    </button>

    <button className="create-btn" onClick={handleCreateInvoice}>
      Create
    </button>
  </div>
)}

        {/* MODALS */}
        {showCustomerModal && (
          <CustomerModal
            setShow={setShowCustomerModal}
            setCustomer={setCustomer}
          />
        )}

        {showItemModal && (
          <ItemModal
            setShow={setShowItemModal}
            setItems={setItems}
            items={items}
          />
        )}
      </div>
    </div>
  );
}

export default Billing;