import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      {/* <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
        Home
      </Link> */}
      {/* <h2 className="logo">Logo</h2> */}

      <Link
        to="/dashboard"
        className={location.pathname === "/dashboard" ? "active-link" : ""}
      >
        Dashboard
      </Link>

      <Link
        to="/master"
        className={location.pathname === "/master" ? "active-link" : ""}
      >
        Master
      </Link>

      {/* <Link
        to="/customers"
        className={location.pathname === "/customers" ? "active-link" : ""}
      >
        Master
      </Link> */}

      <Link
        to="/billing"
        className={location.pathname === "/billing" ? "active-link" : ""}
      >
        Billing
      </Link>

      <Link
        to="/invoices"
        className={location.pathname === "/invoices" ? "active-link" : ""}
      >
        Invoices
      </Link>
    </div>
  );
}

export default Sidebar;
