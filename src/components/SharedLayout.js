import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SIdebar from "./SIdebar";
import { useState } from "react";

const SharedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <SIdebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
