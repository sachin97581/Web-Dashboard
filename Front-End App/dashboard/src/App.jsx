import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
// import Items from "./pages/Items";
// import AddItem from "./pages/AddItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        {/* <Route path="/items" element={<Items />} /> */}
        {/* <Route path="/add-item" element={<AddItem />} /> */}
      </Routes>
    </Router>
  );
}

export default App;