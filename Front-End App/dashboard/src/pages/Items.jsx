import { useEffect, useState } from "react";
import API from "../api/api";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

//   useEffect(() => {
//     API.get("/customers").then((res) => setCustomers(res.data));
//   }, []);

    useEffect(() => {
    API.get("/items").then((res) => setItems(res.data));
    }, []);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h2>CUSTOMERS</h2>

        <button onClick={() => navigate("/add-customer")}>+ ADD</button>

        <div className="card-container">
          {customers.map((c) => (
            <div className="card" key={c.id}>
              <h3>{c.name}</h3>
              <span className={c.status === "Active" ? "active" : "inactive"}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customers;