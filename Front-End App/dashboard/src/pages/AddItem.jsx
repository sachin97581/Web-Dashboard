import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
import API from "../api/api";
import "../styles/addItems.css";

function AddItem() {
  const navigate = useNavigate();

  const [item, setItem] = useState({
    name: "",
    price: "",
    status: "Active",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await API.post("/items", {
      ItemName: item.name,
      SellingPrice: item.price,
      IsActive: item.status === "Active" ? "Y" : "N",
    });

    alert("Item Added Successfully ✅");
    navigate("/items");
  } catch (error) {
    // console.error(error);
    alert("Error adding item ");
  }
};

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        {/* <Navbar /> */}

        <h2>Add New Item</h2>

        <form className="form" onSubmit={handleSubmit}>
          {/* Item Name */}
          <div className="form-group">
            <label>Item Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Item Name"
              value={item.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Price */}
          <div className="form-group">
            <label>Customer Selling Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              value={item.price}
              onChange={handleChange}
              required
            />
          </div>

          {/* Status */}
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={item.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="In-Active">In-Active</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="btn-group">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/items")}
            >
              Cancel
            </button>

            <button type="submit" className="create-btn">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;