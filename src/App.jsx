import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "../src/index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { HomeView } from "./views/HomeView";
import { ServicesView } from "./views/ServicesView";
import { DashboardView } from "./views/DashboardView";
import { ServicesListingView } from "./views/ServicesListingView";
import { ContactView } from "./views/ContactView";
import Signup from "./components/Signup/Signup";

import {
  ConsultingRegistration,
  DistributionHubForm,
  FSPRegistration,
  FreightRegistration,
  ISPRegistration,
  ParcelRegistration,
  ThreePL,
  Transport,
  WarehouseRegistration,
} from "./components/Forms/RegistrationForms";

import Footer from "./components/Footer/Footer";
import DynamicPage1 from "./components/ServicePages/DynamicPage1";
import InsurancePage from "./components/ServicePages/InsurancePage";
import DistributionPage from "./components/ServicePages/DistributionPage";
import FreightPage from "./components/ServicePages/FreightPage";
import FinancePage from "./components/ServicePages/FinancePage";
import {
  TransportDetails,
  LogisticsDetails,
  WarehouseDetails,
  FreightDetails,
  InsuranceDetails,
  DistributionDetails,
  FinanceDetails,
} from "./components/ServicePages/data";

import {
  HireAFreight,
  Insurance,
  Pallet,
  ULC,
  WarehouseListingForm,
} from "./components/Forms/QuoteBookingForms";


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

          <Route
            path="/warehouseRegistration"
            element={<WarehouseRegistration />}
          />
          <Route path="/ispRegistration" element={<ISPRegistration />} />
          <Route path="/parcelRegistration" element={<ParcelRegistration />} />
          <Route path="/3plRegistration" element={<ThreePL />} />
          <Route path="/transportRegistration" element={<Transport />} />
          <Route path="/fspRegistration" element={<FSPRegistration />} />
          <Route
            path="/distributionHubRegistration"
            element={<DistributionHubForm />}
          />

          <Route path="/insuranceForm" element={<Insurance />} />
          <Route path="/ulcDetails" element={<ULC />} />
          <Route
            path="/consultingRegistration"
            element={<ConsultingRegistration />}
          />
          <Route
            path="/freightRegistration"
            element={<FreightRegistration />}
          />
          <Route path="/bookPallet" element={<Pallet />} />
          <Route path="/hireAFreight" element={<HireAFreight />} />
          <Route path="/warehouseListing" element={<WarehouseListingForm />} />

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
          <Route path="/insurance" element={<InsurancePage Data={InsuranceDetails} />}/>
          <Route path="/distribution" element={<DistributionPage Name="Distribution" Data={DistributionDetails} />}/>
          <Route path="/truckDetails" element={<TruckDetails />} />
          <Route
            path="/insurance"
            element={<InsurancePage Data={InsuranceDetails} />}
          />
          <Route
            path="/finance"
            element={<FinancePage Data={FinanceDetails} />}
          />
          <Route
            path="/distribution"
            element={
              <DistributionPage
                Name="Distribution"
                Data={DistributionDetails}
              />
            }
          />
        </Routes>
      </div>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
