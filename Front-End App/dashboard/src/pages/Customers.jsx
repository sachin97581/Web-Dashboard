import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Customers() {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <h2>CUSTOMERS</h2>

        <button onClick={() => navigate("/add-customer")}>+ ADD</button>

        <div className="card-container">
          <div className="card">
            <h3>Gupta Enterprise Pvt. Ltd.</h3>
            <span>Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;