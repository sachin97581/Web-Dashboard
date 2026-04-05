import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <div className="home-container">

        <h1>LogiEdge Billing System</h1>

        <p>
          Manage your billing, customers, and inventory in one place.
        </p>

        <div className="home-buttons">
          <button onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/customers")}
          >
            Manage Customers
          </button>
        </div>

      </div>

    </div>
  );
}

export default Home;



















// import { useNavigate } from "react-router-dom";
// import "../styles/home.css";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="home-wrap">

//       {/* ══════════════ HERO ══════════════ */}
//       <section className="hero">

//         {/* Left — pitch copy */}
//         <div className="hero-left">
//           <div className="hero-tag">Smart Business OS</div>

//           <h1>
//             Billing &amp; inventory,<br />
//             <em>edge-sharp</em><br />
//             management.
//           </h1>

//           <p className="hero-desc">
//             LogiEdge centralises your billing workflows and inventory data
//             into one razor-focused platform. Less friction, faster decisions,
//             real-time insight.
//           </p>

//           <div className="hero-actions">
//             <button
//               className="hero-btn-primary"
//               onClick={() => navigate("/dashboard")}
//             >
//               Go to Dashboard <span className="arrow">→</span>
//             </button>
//             <button
//               className="hero-btn-outline"
//               onClick={() => navigate("/customers")}
//             >
//               Explore Master
//             </button>
//           </div>

//           <div className="hero-meta">
//             <span className="meta-item">
//               <span className="meta-dot green" />
//               System operational
//             </span>
//             <span className="meta-item">
//               <span className="meta-dot amber" />
//               3 pending invoices
//             </span>
//             <span className="meta-item">Last sync: 2m ago</span>
//           </div>
//         </div>

//       </section>

//       {/* ══════════════ FEATURES ══════════════ */}
//       <section className="features">
//         <div className="feat-grid">
//           <div className="feat-item">
//             <div className="feat-icon blue">⚡</div>
//             <h3>Live Billing Engine</h3>
//             <p>
//               Generate, dispatch and track invoices instantly with automated
//               GST calculations and payment status.
//             </p>
//           </div>
//           <div className="feat-item">
//             <div className="feat-icon gold">📦</div>
//             <h3>Inventory Control</h3>
//             <p>
//               Real-time stock tracking with low-stock alerts, category
//               management, and supplier ledger.
//             </p>
//           </div>
//           <div className="feat-item">
//             <div className="feat-icon green">📊</div>
//             <h3>Smart Reports</h3>
//             <p>
//               Drill into revenue trends, top SKUs, and cash-flow summaries
//               with one-click exports.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════ FOOTER ══════════════ */}
//       <footer className="home-footer">
//         <span className="home-footer-text">© 2026 LogiEdge Systems</span>
//         <span className="home-footer-version">v1.0.0</span>
//       </footer>

//     </div>
//   );
// }

// export default Home;