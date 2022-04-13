import React from "react";
import Day from "./Day";
import Night from "./Night";
import RiseSet from "./RiseSet";

const OneDayCon = ({ dayForecast, getLocalDateTime }) => {
  return (
    <div className="oneDayCon">
      {console.log(dayForecast)}
      <Day data={dayForecast} getLocalDateTime={getLocalDateTime} />
      <Night data={dayForecast} getLocalDateTime={getLocalDateTime} />
      <RiseSet
        sun={dayForecast.Sun}
        moon={dayForecast.Moon}
        getLocalDateTime={getLocalDateTime}
      />
    </div>
  );
};

export default OneDayCon;
