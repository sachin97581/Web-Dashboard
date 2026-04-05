// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// function AddCustomer() {
//   return (
//     <div className="layout">
//       <Sidebar />

//       <div className="main">
//         <Navbar />

//         <h2>Add New Customer</h2>

//         <form className="form">
//           <input placeholder="Customer Name" />
//           <input placeholder="Address" />
//           <input placeholder="PAN Number" />
//           <input placeholder="GST Number" />

//           <select>
//             <option>Active</option>
//             <option>Inactive</option>
//           </select>

//           <button>Create</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddCustomer;

import { useState } from "react";
import API from "../api/api";
import Sidebar from "../components/Sidebar";
import "../styles/form.css";

function AddCustomer() {
  const [data, setData] = useState({
    name: "",
    address: "",
    pan: "",
    gst: "",
    status: "Active",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/customers", data);
    alert("Customer Added");
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h2>Add New Customer</h2>

        <form onSubmit={handleSubmit} className="form">
          <input onChange={(e) => setData({...data, name: e.target.value})} placeholder="Name" />
          <input onChange={(e) => setData({...data, address: e.target.value})} placeholder="Address" />
          <input onChange={(e) => setData({...data, pan: e.target.value})} placeholder="PAN" />
          <input onChange={(e) => setData({...data, gst: e.target.value})} placeholder="GST" />

          <button>Create</button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;