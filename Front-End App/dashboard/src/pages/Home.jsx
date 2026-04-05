// import { useNavigate } from "react-router-dom";
// import "../styles/layout.css";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       <div className="home-card">
//         <h1 className="title">Welcome to LogiEdge</h1>
//         <p className="subtitle">
//           Smart Billing & Inventory Management System
//         </p>

//         <button
//           className="dashboard-btn"
//           onClick={() => navigate("/dashboard")}
//         >
//           Go to Dashboard →
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrap">

      {/* ══════════════ HERO ══════════════ */}
      <section className="hero">

        {/* Left — pitch copy */}
        <div className="hero-left">
          <div className="hero-tag">Smart Business OS</div>

          <h1>
            Billing &amp; inventory,<br />
            <em>edge-sharp</em><br />
            management.
          </h1>

          <p className="hero-desc">
            LogiEdge centralises your billing workflows and inventory data
            into one razor-focused platform. Less friction, faster decisions,
            real-time insight.
          </p>

          <div className="hero-actions">
            <button
              className="hero-btn-primary"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard <span className="arrow">→</span>
            </button>
            <button
              className="hero-btn-outline"
              onClick={() => navigate("/customers")}
            >
              Explore Master
            </button>
          </div>

          <div className="hero-meta">
            <span className="meta-item">
              <span className="meta-dot green" />
              System operational
            </span>
            <span className="meta-item">
              <span className="meta-dot amber" />
              3 pending invoices
            </span>
            <span className="meta-item">Last sync: 2m ago</span>
          </div>
        </div>

        {/* Right — live stats preview card */}
        <div className="hero-right">
          <div className="dashboard-preview">
            <div className="dp-header">
              <span className="dp-title">OVERVIEW — APRIL 2026</span>
              <div className="dp-dots">
                <div className="dp-dot" style={{ background: "#E05A5A" }} />
                <div className="dp-dot" style={{ background: "#C8943A" }} />
                <div className="dp-dot" style={{ background: "#2ECC8A" }} />
              </div>
            </div>

            <div className="dp-body">
              <div className="stat-row">
                <div className="stat-box">
                  <div className="stat-label">Revenue</div>
                  <div className="stat-value">₹84.2K</div>
                  <div className="stat-change up">+12.4% this month</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Invoices</div>
                  <div className="stat-value">247</div>
                  <div className="stat-change down">3 overdue</div>
                </div>
              </div>

              <div className="stat-row">
                <div className="stat-box">
                  <div className="stat-label">SKUs</div>
                  <div className="stat-value">1,082</div>
                  <div className="stat-change up">18 low stock</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Orders</div>
                  <div className="stat-value">63</div>
                  <div className="stat-change up">+5 today</div>
                </div>
              </div>

              <div className="bar-chart">
                <div className="bar-chart-label">Top Categories</div>
                <div className="bar-row">
                  <span className="bar-name">ELEC</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: "78%", background: "#3B8BEB" }} />
                  </div>
                  <span className="bar-val">₹32K</span>
                </div>
                <div className="bar-row">
                  <span className="bar-name">APRL</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: "55%", background: "#C8943A" }} />
                  </div>
                  <span className="bar-val">₹22K</span>
                </div>
                <div className="bar-row">
                  <span className="bar-name">HOME</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: "38%", background: "#2ECC8A" }} />
                  </div>
                  <span className="bar-val">₹15K</span>
                </div>
                <div className="bar-row">
                  <span className="bar-name">FMCG</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: "22%", background: "#5A6270" }} />
                  </div>
                  <span className="bar-val">₹9K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ FEATURES ══════════════ */}
      <section className="features">
        <div className="feat-grid">
          <div className="feat-item">
            <div className="feat-icon blue">⚡</div>
            <h3>Live Billing Engine</h3>
            <p>
              Generate, dispatch and track invoices instantly with automated
              GST calculations and payment status.
            </p>
          </div>
          <div className="feat-item">
            <div className="feat-icon gold">📦</div>
            <h3>Inventory Control</h3>
            <p>
              Real-time stock tracking with low-stock alerts, category
              management, and supplier ledger.
            </p>
          </div>
          <div className="feat-item">
            <div className="feat-icon green">📊</div>
            <h3>Smart Reports</h3>
            <p>
              Drill into revenue trends, top SKUs, and cash-flow summaries
              with one-click exports.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="home-footer">
        <span className="home-footer-text">© 2026 LogiEdge Systems</span>
        <span className="home-footer-version">v1.0.0</span>
      </footer>

    </div>
  );
}

export default Home;