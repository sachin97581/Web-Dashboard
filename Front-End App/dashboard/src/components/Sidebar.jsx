// import { Link } from "react-router-dom";
// // import "../styles/card.css";

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <Link to="/dashboard">Dashboard</Link>
//       <Link to="/customers">Master</Link>
//       <Link to="/billing">Billing</Link>
//     </div>
//   );
// }

// export default Sidebar;

import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2 className="logo">Logo</h2>

      <Link
        to="/"
        className={location.pathname === "/" ? "active-link" : ""}
      >
        Dashboard
      </Link>

      <Link
        to="/customers"
        className={location.pathname === "/customers" ? "active-link" : ""}
      >
        Master
      </Link>

      <Link
        to="/billing"
        className={location.pathname === "/billing" ? "active-link" : ""}
      >
        Billing
      </Link>
    </div>
  );
}

export default Sidebar;
