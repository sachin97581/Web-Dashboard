// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Customers from "./pages/Customers";
// import AddCustomer from "./pages/AddCustomer";
// // import Items from "./pages/Items";
// // import AddItem from "./pages/AddItem";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/customers" element={<Customers />} />
//         <Route path="/add-customer" element={<AddCustomer />} />
//         {/* <Route path="/items" element={<Items />} /> */}
//         {/* <Route path="/add-item" element={<AddItem />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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
        <Route path="/invoice/:id" element={<InvoiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;