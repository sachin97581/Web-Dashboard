import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo" onClick={() => navigate("/")}>
        LogiEdge
      </div>

      {/* Right side button */}
      {/* <button
        className="navbar-btn"
        onClick={() => navigate("/billing")}
      >
        + New Invoice
      </button> */}

    </nav>
  );
}

export default Navbar;