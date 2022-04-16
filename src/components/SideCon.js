import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideCon = ({ isSideConShown, handleSideBar, locationKey }) => {
  return (
    <div className={`sideCon ${isSideConShown ? "show" : ""}`}>
      <div className="crossCon" onClick={() => handleSideBar("hide")}>
        <IoClose
          style={{
            fontSize: "2.5rem",
          }}
          className="hoverable"
        />
      </div>
      <Link to="settings" onClick={() => handleSideBar("hide")}>
        Settings
      </Link>
      <Link to="/" onClick={() => handleSideBar("hide")}>
        Home
      </Link>
      <Link
        to={`forecast/${locationKey}/today`}
        onClick={() => handleSideBar("hide")}
      >
        Forecasts
      </Link>
    </div>
  );
};

export default SideCon;
