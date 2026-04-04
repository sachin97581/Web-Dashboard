import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
 import "../styles/card.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <h2>Master</h2>

        <div className="card-container">
          <div className="card" onClick={() => navigate("/customers")}>
            <h3>Customer</h3>
            <p>Read or Create customer data</p>
          </div>

          <div className="card" onClick={() => navigate("/items")}>
            <h3>Items</h3>
            <p>Read or Create items data</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;