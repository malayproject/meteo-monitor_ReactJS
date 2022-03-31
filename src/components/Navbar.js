import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = ({ location, isLoading }) => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className={"logo-name"}>
          <img
            src={"./images/AppLogo.svg"}
            alt="cloud pic"
            className="logoImg hoverable"
          />

          <div className="brandName hoverable">MeteoMonitor</div>
        </Link>
        {isLoading || (
          <div className="currLocation">
            {console.log(location)}
            {location.locationName}, {location.area}, {location.country}
          </div>
        )}
      </div>
      <FaBars className="faBars hoverable" />
    </div>
  );
};

export default Navbar;
