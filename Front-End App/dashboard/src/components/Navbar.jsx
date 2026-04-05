// import "../styles/card.css";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <h2>Master Home</h2>
//     </div>
//   );
// }

// export default Navbar;

// import { NavLink, useNavigate } from "react-router-dom";
// // import "../styles/navbar.css";

// function Navbar() {
//   const navigate = useNavigate();
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo" onClick={() => navigate("/")}>
//         <div className="logo-icon">LE</div>
//         <span className="logo-text">Logi<span>Edge</span></span>
//       </div>
//       <div className="nav-links">
//         <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink>
//         <NavLink to="/inventory" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Inventory</NavLink>
//         <NavLink to="/billing"   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Billing</NavLink>
//         <NavLink to="/reports"   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Reports</NavLink>
//         <NavLink to="/settings"  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Settings</NavLink>
//       </div>
//       <div className="nav-right">
//         <span className="nav-badge">v2.4.1</span>
//         <button className="nav-btn" onClick={() => navigate("/billing/new")}>New Invoice ↗</button>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;

import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

/**
 * Navbar.jsx — used on the Home (/) page only.
 * For all other inner pages, the sidebar from Layout.jsx is used instead.
 *
 * Import in App.jsx only on the "/" route, or wrap Home in this component.
 */
function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="main-navbar">

      {/* ── Logo ── */}
      <div className="main-navbar-logo" onClick={() => navigate("/")}>
        <div className="main-navbar-logo-icon">LE</div>
        <span className="main-navbar-logo-text">
          Logi<span>Edge</span>
        </span>
      </div>

      {/* ── Centre links ── */}
      <div className="main-navbar-links">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            "main-navbar-link" + (isActive ? " active" : "")
          }
        >
          Dashboard
        </NavLink>

        {/* <NavLink
          to="/master"
          className={({ isActive }) =>
            "navbar-link" + (isActive ? " active" : "")
          }
        >
          Master
        </NavLink> */}

        {/* <NavLink
          to="/master/customers"
          className={({ isActive }) =>
            "navbar-link" + (isActive ? " active" : "")
          }
        >
          Customers
        </NavLink> */}

        {/* <NavLink
          to="/master/items"
          className={({ isActive }) =>
            "navbar-link" + (isActive ? " active" : "")
          }
        >
          Items
        </NavLink> */}
{/* 
        <NavLink
          to="/billing"
          className={({ isActive }) =>
            "main-navbar-link" + (isActive ? " active" : "")
          }
        >
          Billing
        </NavLink> */}
      </div>

      {/* ── Right side ── */}
      <div className="main-navbar-right">
        <span className="main-navbar-badge">v1.0.0</span>
        <button
          className="main-navbar-btn"
          onClick={() => navigate("/billing")}
        >
          + New Invoice
        </button>
      </div>

    </nav>
  );
}

export default Navbar;