import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = ({ location, isLoading, currentCondition }) => {
  //   console.log(currentCondition);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className={"logo-name"}>
          <img
            src={"../../images/AppLogo.svg"}
            alt="cloud pic"
            className="logoImg hoverable"
          />

          <div className="brandName hoverable">MeteoMonitor</div>
        </Link>
        {isLoading || (
          <div className="currLocation">
            {/* {console.log(location)} */}
            {location.locationName}, {location.area}, {location.country}
            &nbsp;&emsp;
            {currentCondition.temperature.metric.value}&#176;
            <span>
              {currentCondition.temperature.metric.unit.toLowerCase()}
            </span>
            {/* <img src={"./images/rainy.svg"} /> */}
            <img
              src={`../../images/weatherIcons/${currentCondition.weatherIcon}.png`}
            />
          </div>
        )}
      </div>
      <FaBars className="faBars hoverable" />
    </div>
  );
};

export default Navbar;
