import { useEffect, useState } from "react";
import API from "../api/api";

function CustomerModal({ setShow, setCustomer }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    API.get("/customers").then((res) => setCustomers(res.data));
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Customer</h2>
        <button onClick={() => setShow(false)}>Cancel</button>

        <div className="card-container">
          {customers.map((c) => (
            <div
              key={c.CustID}
              className="card"
              onClick={() => {
                setCustomer(c);
                setShow(false);
              }}
            >
              <h3>{c.CustName}</h3>
              <span>{c.isActive === "Y" ? "Active" : "In-Active"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerModal;