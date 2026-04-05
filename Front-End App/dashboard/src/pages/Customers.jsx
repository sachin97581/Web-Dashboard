import { useEffect, useState } from "react";
import API from "../api/api";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import "../styles/customer.css";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/customers")
      .then((res) => setCustomers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <div className="header">
          <h2>CUSTOMERS</h2>
          <button onClick={() => navigate("/add-customer")}>+ ADD</button>
        </div>

        <div className="card-container">
          {customers.map((c) => (
            <div className="card" key={c.CustID}>
              <h3>{c.CustName}</h3>

              <span
                className={
                  c.isActive === "Y"
                    ? "badge active"
                    : "badge inactive"
                }
              >
                {c.isActive === "Y" ? "Active" : "In-Active"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customers;