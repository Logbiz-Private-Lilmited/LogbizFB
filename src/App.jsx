import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { HomeView } from "./views/HomeView";
import { ServicesView } from "./views/ServicesView";
import { DashboardView } from "./views/DashboardView";
import { ServicesListingView } from "./views/ServicesListingView";
import { ContactView } from "./views/ContactView";
import Signup from "./components/Signup/Signup";
// import { LoginView } fro .m "./views/LoginView";
import WarehouseListing from "./components/Forms/WarehouseListingForm";
// import FSPRegistration from "./components/Forms/Registrations/FSPRegistration";
// import DistributionHubForm from "./components/Forms/Registrations/DistributionHubForm";
// import WarehouseRegistration from "./components/Forms/Registrations/WarehouseRegistration";
// import Transport from "./components/Forms/Registrations/Transport";

import Footer from "./components/Footer/Footer";
import DynamicPage1 from "./components/ServicePages/DynamicPage1";
import TransportDetails from "./components/ServicePages/Transport";
import WarehouseDetails from "./components/ServicePages/Warehouse";
import LogisticsDetails from "./components/ServicePages/Logistics";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/signup"];
  const hideFooterPaths = ["/signup"];

  return (
    <div className="flex flex-col items-center mt-4">
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <div
        className={`mt-24 w-[98%] ${
          hideNavbarPaths.includes(location.pathname) ? "mt-0" : ""
        }`}
      >
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomeView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/services-listing" element={<ServicesListingView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/login" element={<LoginView />} /> */}
          <Route path="/wform" element={<WarehouseListing />} />
          <Route
            path="/transportpage"
            element={
              <DynamicPage1
                Name="Road Transportation"
                Data={TransportDetails}
              />
            }
          />
          <Route
            path="/warehousepage"
            element={<DynamicPage1 Name="Warehouse" Data={WarehouseDetails} />}
          />
          <Route
            path="/logisticspage"
            element={<DynamicPage1 Name="Logistics" Data={LogisticsDetails} />}
          />
        </Routes>
      </div>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
