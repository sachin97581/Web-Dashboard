import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import Billing from "./pages/Billing";
import InvoiceDetails from "./pages/InvoiceDetails";
import Master from "./pages/Master";
import Invoices from "./pages/Invoices";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/master" element={<Master />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoice/:id" element={<InvoiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;