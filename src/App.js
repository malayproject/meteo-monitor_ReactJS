import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ForecastPage from "./components/ForecastPage";
import DeadendPage from "./components/DeadendPage";
import Navbar from "./components/Navbar";

function App() {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentCondition, setCurrentCondition] = useState(null);

  const getNavbarProps = (location, isLoading, currentCondition) => {
    setIsLoading(isLoading);
    setLocation(location);
    setCurrentCondition(currentCondition);
  };

  return (
    <BrowserRouter basename="/meteomonitor_ReactJS">
      <main className="main">
        <Navbar
          location={location}
          isLoading={isLoading}
          currentCondition={currentCondition}
        />
        <Routes>
          <Route
            path={"/"}
            element={<LandingPage getNavbarProps={getNavbarProps} />}
          />
          <Route
            path={"/forecast/:locationKey/*"}
            element={
              <ForecastPage
                currentCondition={currentCondition}
                setCurrentCondition={setCurrentCondition}
              />
            }
          />
          <Route path={"*"} element={<DeadendPage />} />
        </Routes>
      </main>

      {/* {`lat: ${coords.lat}, long: ${coords.long}`} */}
      {/* <div className="location-details">{`${location.locationName}, ${location.area}, ${location.country}`}</div> */}
    </BrowserRouter>
  );
}

export default App;
