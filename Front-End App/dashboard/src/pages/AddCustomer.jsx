import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AddCustomer() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <h2>Add New Customer</h2>

        <form className="form">
          <input placeholder="Customer Name" />
          <input placeholder="Address" />
          <input placeholder="PAN Number" />
          <input placeholder="GST Number" />

          <select>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button>Create</button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;