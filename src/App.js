import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Dashboard from "./scenes/dashboard";
import AdminDashboard from "./scenes/admindashboard/index";
import AdminCPUTraffic from "./scenes/admindashboard/CPU";
import AdminPageLikes from "./scenes/admindashboard/PageLikes";
import AdminSalesUpdate from "./scenes/admindashboard/SalesUpdate";
import AdminOverallUsers from "./scenes/admindashboard/OverallUsers";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import RestaurantDashboard from "./scenes/restaurant/RestaurantDashboard";
import RestaurantList from "./scenes/restaurant/RestaurantList";
import RestaurantApplicants from "./scenes/restaurant/RestaurantApplicants";
import RestaurantOrders from "./scenes/restaurant/RestaurantOrders";
import RestaurantBlock from "./scenes/restaurant/RestaurantBlock";
import LoginPage from "./scenes/login/loginPage/LoginPage";
import ResetPasswordPage from "./scenes/login/resetPasswordPage/ResetPasswordPage";
import OtpPage from "./scenes/login/otpPage/OtpPage";
import RiderList from "./scenes/rider/RiderList";
import RiderBlock from "./scenes/rider/RiderBlock";
import RiderApplicants from "./scenes/rider/RiderApplicants";
import RiderDashboard from "./scenes/rider/RiderDashboard";
import CustomerDashboard from "./scenes/customer/index";
import CustomerList from "./scenes/customer/CustomerList";
import CustomerOrderHistory from "./scenes/customer/CustomerOrderHistory";
import CustomerBanned from "./scenes/customer/CustomerBanned";
import OrderDelivered from "./scenes/order/OrderHistory";
import OrderCancelled from "./scenes/order/OrderCancelled";
import OrderHistory from "./scenes/order/OrderHistory";
import Integrations from "./scenes/integrate/index";
import PrivateRoute from "./scenes/PrivateRoute";

// Set axios defaults
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common["Accept"] = process.env.REACT_APP_HEADER_ACCEPT;

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PrivateRoute
                    isSidebar={isSidebar}
                    setIsSidebar={setIsSidebar}
                  />
                  {/* <Layout isSidebar={isSidebar} setIsSidebar={setIsSidebar} /> */}
                </>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="/admin">
                <Route index element={<AdminDashboard />} />
                <Route path="cpu" element={<AdminCPUTraffic />} />
                <Route path="pagelikes" element={<AdminPageLikes />} />
                <Route path="salesupdate" element={<AdminSalesUpdate />} />
                <Route path="overallusers" element={<AdminOverallUsers />} />
              </Route>
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/restaurant">
                <Route index element={<RestaurantDashboard />} />
                <Route path="list" element={<RestaurantList />} />
                <Route path="block" element={<RestaurantBlock />} />
                <Route path="applicant" element={<RestaurantApplicants />} />
                <Route path="order" element={<RestaurantOrders />} />
              </Route>
              <Route path="/rider">
                <Route index element={<RiderDashboard />} />
                <Route path="list" element={<RiderList />} />
                <Route path="block" element={<RiderBlock />} />
                <Route path="applicant" element={<RiderApplicants />} />
              </Route>
              <Route path="/customer">
                <Route index element={<CustomerDashboard />} />
                <Route path="list" element={<CustomerList />} />
                <Route path="banned" element={<CustomerBanned />} />
                <Route path="orderHistory" element={<CustomerOrderHistory />} />
              </Route>
              <Route path="/order">
                <Route path="delivered" element={<OrderDelivered />} />
                <Route path="cancelled" element={<OrderCancelled />} />
                <Route path="history" element={<OrderHistory />} />
              </Route>
              <Route path="/integrations">
                <Route index element={<Integrations />} />
              </Route>
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reset" element={<ResetPasswordPage />} />
            <Route path="/otp" element={<OtpPage />} />
          </Routes>
          {/* </main> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
