import "./App.css";
import React, { useState, useRef } from "react";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ForecastPage from "./components/ForecastPage";
import DeadendPage from "./components/DeadendPage";
import Navbar from "./components/Navbar";
import SettingsPage from "./components/SettingsPage";
import SideCon from "./components/SideCon";

function App() {
  const [location, setLocation] = useState({
    area: "Delhi",
    country: "IN",
    locationKey: "202396",
    locationName: "Delhi",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentCondition, setCurrentCondition] = useState(null);
  const [isMetric, setIsMetric] = useState(true);
  const keyNo = Math.floor(Math.random() * 10);
  const [isSideConShown, setIsSideConShown] = useState(false);

  const getNavbarProps = (location, isLoading, currentCondition) => {
    setIsLoading(isLoading);
    setLocation(location);
    setCurrentCondition(currentCondition);
  };

  const handleSideBar = (action) => {
    if (action === "show") setIsSideConShown(true);
    if (action === "hide") setIsSideConShown(false);
  };

  return (
    <BrowserRouter basename="/meteo-monitor_ReactJS">
      <main className="main">
        <Navbar
          location={location}
          isLoading={isLoading}
          currentCondition={currentCondition}
          handleSideBar={handleSideBar}
        />
        <Routes>
          <Route
            path={"/"}
            element={
              <LandingPage
                getNavbarProps={getNavbarProps}
                keyNo={keyNo}
                isMetric={isMetric}
                location={location}
                setLocation={setLocation}
              />
            }
          />
          <Route
            path={"/forecast/:locationKey/*"}
            element={
              <ForecastPage
                currentCondition={currentCondition}
                setCurrentCondition={setCurrentCondition}
                keyNo={keyNo}
                isMetric={isMetric}
              />
            }
          />
          <Route
            path={"/settings"}
            element={
              <SettingsPage setIsMetric={setIsMetric} isMetric={isMetric} />
            }
          />
          <Route path={"*"} element={<DeadendPage />} />
        </Routes>
        <SideCon
          isSideConShown={isSideConShown}
          handleSideBar={handleSideBar}
          locationKey={location.locationKey}
        />
      </main>

      {/* {`lat: ${coords.lat}, long: ${coords.long}`} */}
      {/* <div className="location-details">{`${location.locationName}, ${location.area}, ${location.country}`}</div> */}
    </BrowserRouter>
  );
}

export default App;
