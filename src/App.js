import SharedLayout from "./components/SharedLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";

import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";
import { useEffect } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#DC9402");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <>
      {loading ? (
        <InitailSpinner>
          <RingLoader color={color} loading={loading} size={150} />
        </InitailSpinner>
      ) : (
        <div className="app">
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicePage />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
}

const InitailSpinner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-black-1);
`;

export default App;
