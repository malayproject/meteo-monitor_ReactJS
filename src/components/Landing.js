import React from "react";
import Navbar from "./Navbar";

const Landing = ({ location, isLoading }) => {
  return (
    <div className="landing">
      <Navbar location={location} isLoading={isLoading} />
      {isLoading || (
        <div className="landingRest">
          {console.log(location)}
          {location.locationName}, {location.area}, {location.country}
        </div>
      )}
    </div>
  );
};

export default Landing;
