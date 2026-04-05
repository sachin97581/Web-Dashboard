import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/master.css";

function Master() {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h2>Master</h2>

        <div className="master-cards">
          <div
            className="master-card"
            onClick={() => navigate("/customers")}
          >
            <h3>Customer</h3>
            <p>Read or Create customer data</p>
          </div>

          <div
            className="master-card"
            onClick={() => navigate("/items")}
          >
            <h3>Items</h3>
            <p>Read or Create items data</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Master;