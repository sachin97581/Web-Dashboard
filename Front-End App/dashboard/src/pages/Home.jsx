import { useNavigate } from "react-router-dom";
 import "../styles/layout.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>LogiEdge Billing App</h1>

      <button onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </button>
    </div>
  );
}

export default Home;