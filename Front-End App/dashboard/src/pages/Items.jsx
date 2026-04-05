import { useEffect, useState } from "react";
import API from "../api/api";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import "../styles/items.css";

function Items() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <div className="header">
          <h2>ITEMS</h2>
          <button onClick={() => navigate("/add-item")}>+ ADD</button>
        </div>

        <div className="card-container">
          {items.map((item) => (
            <div className="card" key={item.ItemCode}>
              <h3>{item.ItemName}</h3>

              <span
                className={
                  item.IsActive === "Y"
                    ? "badge active"
                    : "badge inactive"
                }
              >
                {item.IsActive === "Y" ? "Active" : "In-Active"}
              </span>

              <p style={{ marginTop: "5px", fontWeight: "500" }}>
                ₹ {item.SellingPrice}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Items;