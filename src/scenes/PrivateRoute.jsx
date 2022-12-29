import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";

const Layout = ({ isSidebar, setIsSidebar }) => {
  return (
    <>
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Outlet />
      </main>
    </>
  );
};

const PrivateRoute = ({ isSidebar, setIsSidebar }) => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated() ? (
    <Layout isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
