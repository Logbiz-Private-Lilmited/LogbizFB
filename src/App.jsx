import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { HomeView } from "./views/HomeView";
import { ServicesView } from "./views/ServicesView";
import { DashboardView } from "./views/DashboardView";
import { ServicesListingView } from "./views/ServicesListingView";
import { ContactView } from "./views/ContactView";
import Signup from "./components/Signup/Signup";
import { LoginView } from "./views/LoginView";
import WarehouseListing from "./components/Forms/WarehouseListing";

function App() {
  return (
    <div className="flex flex-col items-center mt-4">
      <Navbar />
      <div className=" mt-24 w-[98%]">
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomeView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/services-listing" element={<ServicesListingView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/wform" element={<WarehouseListing />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
