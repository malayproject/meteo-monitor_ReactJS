import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ForcastPage from "./components/ForcastPage";
import DeadendPage from "./components/DeadendPage";

function App() {
  return (
    <BrowserRouter basename="/meteomonitor_ReactJS">
      <main className="main">
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/forcast/:locationKey"} element={<ForcastPage />} />
          <Route path={"*"} element={<DeadendPage />} />
        </Routes>
      </main>

      {/* {`lat: ${coords.lat}, long: ${coords.long}`} */}
      {/* <div className="location-details">{`${location.locationName}, ${location.area}, ${location.country}`}</div> */}
    </BrowserRouter>
  );
}

export default App;
