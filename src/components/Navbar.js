import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = ({
  location,
  isLoading,
  currentCondition,
  handleSideBar,
  isMetric,
}) => {
  //   console.log(currentCondition);

  const unitVal = isMetric ? "metric" : "imperial";

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className={"logo-name  hoverable"}>
          <img
            src={"/meteo-monitor_ReactJS/images/AppLogo.svg"}
            alt="cloud pic"
            className="logoImg hoverable"
          />
          <div className="brandName">MeteoMonitor</div>
        </Link>
        {!isLoading && currentCondition && (
          <Link to={"/"}>
            <div className="currLocation hoverable">
              {/* {console.log(location)} */}
              {location.locationName}, {location.area}, {location.country}
              &nbsp;&emsp;
              {currentCondition.temperature[unitVal].value}&#176;
              <span>
                {currentCondition.temperature[unitVal].unit.toLowerCase()}
              </span>
              {/* <img src={"./images/rainy.svg"} /> */}
              <img
                src={`/meteo-monitor_ReactJS/images/weatherIcons/${currentCondition.weatherIcon}.png`}
              />
            </div>
          </Link>
        )}
      </div>

      <FaBars
        className="faBars hoverable"
        onClick={() => handleSideBar("show")}
      />
    </div>
  );
};

export default Navbar;
