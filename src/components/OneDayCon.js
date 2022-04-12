import React from "react";
import Day from "./Day";
import Night from "./Night";
import RiseSet from "./RiseSet";

const OneDayCon = ({ dayForecast, getLocalTime }) => {
  return (
    <div className="oneDayCon">
      {console.log(dayForecast)}
      <Day data={dayForecast} getLocalTime={getLocalTime} />
      <Night data={dayForecast} getLocalTime={getLocalTime} />
      <RiseSet
        sun={dayForecast.Sun}
        moon={dayForecast.Moon}
        getLocalTime={getLocalTime}
      />
    </div>
  );
};

export default OneDayCon;
