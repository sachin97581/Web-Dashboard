import { Link } from "react-router-dom";
import "../styles/card.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/customers">Master</Link>
      <Link to="/billing">Billing</Link>
    </div>
  );
}

export default Sidebar;