import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Dashboard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/invoices/dashboard").then((res) => setData(res.data));
  }, []);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h2>Dashboard</h2>

        <input placeholder="Search by Invoice ID" />

        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Customer Name</th>
              <th>Item Name(s)</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((inv) => (
              <tr key={inv.id}>
                <td>{inv.invoice_id}</td>
                <td>{inv.customer_name}</td>
                <td>{inv.item_names}</td>
                <td>{inv.total}</td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/invoice/${inv.id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;