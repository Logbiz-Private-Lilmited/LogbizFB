import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "../src/index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { HomeView } from "./views/HomeView";
import { ServicesView } from "./views/ServicesView";
import { DashboardView } from "./views/DashboardView";
import { ServicesListingView } from "./views/ServicesListingView";
import { ContactView } from "./views/ContactView";
import Signup from "./components/Signup/Signup";
// import { LoginView } fro .m "./views/LoginView";

<<<<<<< Updated upstream
import WarehouseListing from "./components/Forms/WarehouseListingForm";
=======
import WarehouseListing from "./components/Forms/QuoteBookingForms/WarehouseListingForm";
>>>>>>> Stashed changes

import FSPRegistration from "./components/Forms/Registrations/FSPRegistration";
import DistributionHubForm from "./components/Forms/Registrations/DistributionHubForm";
import WarehouseRegistration from "./components/Forms/Registrations/WarehouseRegistration";
import ISPRegistration from "./components/Forms/Registrations/ISPRegistration";
import Parcel from "./components/Forms/Registrations/Parcel";
import ThreePL from "./components/Forms/Registrations/ThreePL";
import Transport from "./components/Forms/Registrations/Transport";

import Footer from "./components/Footer/Footer";
import DynamicPage1 from "./components/ServicePages/DynamicPage1";
import FreightPage from "./components/ServicePages/FreightPage";
import {
  TransportDetails,
  LogisticsDetails,
  WarehouseDetails,
  FreightDetails,
} from "./components/ServicePages/data";
import Insurance from "./components/Forms/QuoteBookingForms/Insurance";
import ULC from "./components/Forms/QuoteBookingForms/ULC";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/signup"];
  const hideFooterPaths = ["/signup"];

  return (
    <div className="flex flex-col items-center mt-4">
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <div
        className={` w-[98%] ${
          hideNavbarPaths.includes(location.pathname) ? "mt-0" : "mt-24"
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

          {/* forms-start */}

          <Route path="/wform" element={<WarehouseListing />} />

          <Route
            path="/warehouseRegistration"
            element={<WarehouseRegistration />}
          />
          <Route path="/ispRegistration" element={<ISPRegistration />} />
          <Route path="/parcelRegistration" element={<Parcel />} />
          <Route path="/3plRegistration" element={<ThreePL />} />
          <Route path="/transportRegistration" element={<Transport />} />
          <Route path="/fspRegistration" element={<FSPRegistration />} />
          <Route
            path="/distributionHubRegistration"
            element={<DistributionHubForm />}
          />

          <Route path="/insurance" element={<Insurance />} />
          <Route path="/ulcDetails" element={<ULC />} />

          {/* forms-end  */}

          <Route
            path="/transportpage"
            element={
              <DynamicPage1
                Name="Road Transportation"
                Data={TransportDetails}
                img={"/src/assets/ServicePages/transport.png"}
              />
            }
          />
          <Route
            path="/warehousepage"
            element={
              <DynamicPage1
                Name="Warehouse"
                Data={WarehouseDetails}
                img="/src/assets/ServicePages/warehouse.png"
              />
            }
          />
          <Route
            path="/logisticspage"
            element={
              <DynamicPage1
                Name="Logistics"
                Data={LogisticsDetails}
                img="/src/assets/ServicePages/logistics.jpg"
              />
            }
          />
          <Route
            path="/freightpage"
            element={<FreightPage Data={FreightDetails} />}
          />
        </Routes>
      </div>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
