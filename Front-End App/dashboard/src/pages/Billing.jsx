import { useEffect, useState } from "react";
import API from "../api/api";
import Sidebar from "../components/Sidebar";

function Billing() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    API.get("/customers").then((res) => setCustomers(res.data));
  }, []);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h2>Billing</h2>

        {!selectedCustomer && (
          <div className="card-container">
            {customers.map((c) => (
              <div className="card" onClick={() => setSelectedCustomer(c)}>
                {c.name}
              </div>
            ))}
          </div>
        )}

        {selectedCustomer && (
          <div>
            <h3>{selectedCustomer.name}</h3>
            {/* Next: add items */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Billing;