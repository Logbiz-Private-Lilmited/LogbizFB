import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "../src/index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { HomeView } from "./views/HomeView";
import { ServicesView } from "./views/ServicesView";
import DashboardView from "./views/DashboardView";
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
  WarehouseServiceDetails,
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
import TruckDetails from "./components/ServicePages/ServiceDetails/truckdetails";
import WarehouseDetails from "./components/ServicePages/ServiceDetails/WarehouseDetails/warehouseDetails";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
import PromotionPage from "./components/PromotionPage/PromotionPage";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/signup"];
  const hideFooterPaths = ["/signup"];

  // Manage the isAuthenticated state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle the authentication state
  const handleAuthToggle = () => {
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      {!hideNavbarPaths.includes(location.pathname) && (
        <Navbar
          handleAuthToggle={handleAuthToggle}
          isAuthenticated={isAuthenticated}
        />
      )}
      <div
        className={`prose w-[98%] pb-10 ${
          hideNavbarPaths.includes(location.pathname)
            ? "mt-0"
            : "mt-20 sm:mt-24" // only this css works for both breakpoints
        }`}
      >
        <Routes>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/" element={<HomeView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/services-listing" element={<ServicesListingView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/promotion-page" element={<PromotionPage />} />

          {/* Pages that require authentication go here */}
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/dashboard" element={<DashboardView />} />
            <Route
              path="/warehouseRegistration"
              element={<WarehouseRegistration />}
            />
            <Route path="/ispRegistration" element={<ISPRegistration />} />
            <Route
              path="/parcelRegistration"
              element={<ParcelRegistration />}
            />
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
            <Route
              path="/hireAFreight/:freightType"
              element={<HireAFreight />}
            />

            <Route
              path="/warehouseListing"
              element={<WarehouseListingForm />}
            />
          </Route>

          <Route
            path="/freightpage"
            element={<FreightPage Data={FreightDetails} />}
          />
          <Route
            path="/insurance"
            element={
              <InsurancePage
                Data={InsuranceDetails}
                linkTo={"/insuranceForm"}
              />
            }
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
          <Route path="/warehouseDetails" element={<WarehouseDetails />} />
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

          {/* Dynamic Routing of Transport */}
          <Route path="transportpage/:companyName" element={<TruckDetails />} />
          <Route
            path="/transportpage"
            element={
              <DynamicPage1
                name="Road Transportation"
                data={TransportDetails}
              />
            }
          />

          {/* Dynamic Routing of Warehouse */}
          <Route path="warehousepage/:companyName" element={<TruckDetails />} />
          <Route
            path="/warehousepage"
            element={
              <DynamicPage1
                name="Warehouse Details"
                data={WarehouseServiceDetails}
              />
            }
          />

          {/* Dynamic Routing of Logistic Consulting */}
          <Route path="logisticspage/:companyName" element={<TruckDetails />} />
          <Route
            path="/logisticspage"
            element={<DynamicPage1 name="Logistics" data={LogisticsDetails} />}
          />
        </Routes>
      </div>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
