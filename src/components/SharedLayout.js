import AboutPage from "../pages/AboutPage";
import Home from "../pages/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <AboutPage />
      <Footer />
    </>
  );
};
export default SharedLayout;
