import React, { useState, useEffect } from "react";
import OneDayCon from "./OneDayCon";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Daily = ({ locationKey, fiveDForecast, getLocalDateTime }) => {
  const [currDay, setCurrDay] = useState(null);

  const handleDay = (change) => {
    setCurrDay((prev) => ({
      ...prev,
      dayCount: prev.dayCount + change,
      day: new Date(
        parseInt(`${fiveDForecast[prev.dayCount + change].EpochDate}000`)
      ),
    }));
  };

  useEffect(() => {
    let date = new Date();
    setCurrDay({
      dayCount: 0,
      day: new Date(parseInt(`${fiveDForecast[0].EpochDate}000`)),
    });
  }, []);

  return (
    currDay && (
      <div className={"dailyCon"}>
        {console.log(currDay)}
        <div className="navigatorDiv">
          {currDay.dayCount !== 0 ? (
            <FaAngleLeft
              onClick={() => handleDay(-1)}
              style={{ fontSize: "2rem" }}
            />
          ) : (
            <span>&emsp;&nbsp;&nbsp;</span>
          )}
          <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
            {currDay.day.toDateString()}
          </span>
          {currDay.dayCount !== 4 ? (
            <FaAngleRight
              onClick={() => handleDay(1)}
              style={{ fontSize: "2rem" }}
            />
          ) : (
            <span>&emsp;&nbsp;&nbsp;</span>
          )}
        </div>
        <OneDayCon
          getLocalDateTime={getLocalDateTime}
          dayForecast={fiveDForecast[currDay.dayCount]}
        />
      </div>
    )
  );
};

export default Daily;
