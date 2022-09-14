import AboutPage from "../pages/AboutPage";
import Home from "../pages/Home";
import ServicePage from "../pages/ServicePage";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <AboutPage /> */}
      <ServicePage />
      <Footer />
    </>
  );
};
export default SharedLayout;
