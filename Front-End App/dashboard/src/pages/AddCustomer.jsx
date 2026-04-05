import { useState } from "react";
import API from "../api/api";
import Sidebar from "../components/Sidebar";
import "../styles/addCustomer.css";

function AddCustomer() {
  const [data, setData] = useState({
    CustName: "",
    CustAddress: "",
    CustPAN: "",
    CustGST: "",
    isActive: "Y",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/customers", data);
      alert("Customer Added ✅");
    } catch (err) {
      // console.log(err);
      alert("Error adding customer");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h2>Add New Customer</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="Customer Name"
            onChange={(e) =>
              setData({ ...data, CustName: e.target.value })
            }
          />

          <input
            placeholder="Address"
            onChange={(e) =>
              setData({ ...data, CustAddress: e.target.value })
            }
          />

          <input
            placeholder="PAN Number"
            onChange={(e) =>
              setData({ ...data, CustPAN: e.target.value })
            }
          />

          <input
            placeholder="GST Number"
            onChange={(e) =>
              setData({ ...data, CustGST: e.target.value })
            }
          />

          <select
            onChange={(e) =>
              setData({ ...data, isActive: e.target.value })
            }
          >
            <option value="Y">Active</option>
            <option value="N">In-Active</option>
          </select>

          <button>Create</button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;