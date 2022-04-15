import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CurrConDiv = ({ locationKey, currentCondition, isMetric }) => {
  const unitVal = isMetric ? "metric" : "imperial";

  const getLocalDateTime = (dateTime) => {
    let hrsin24 = dateTime.slice(11, 13);
    let temp =
      hrsin24 > 12
        ? `${hrsin24 - 12}${dateTime.slice(13, 16)} PM`
        : `${hrsin24}${dateTime.slice(13, 16)} AM`;
    // console.log(temp);
    return temp;
  };

  return (
    <div className="currCondDiv">
      CURRENT WEATHER
      <div className="content">
        <div className="left">
          <div className="time">
            {getLocalDateTime(currentCondition.dateTime, false)}
          </div>
          <div className="icon-temp">
            <img
              src={`./images/weatherIcons/${currentCondition.weatherIcon}.png`}
              className={"icon"}
            />
            <div className="temp">
              <div className="actual">
                <span>
                  {Math.round(currentCondition.temperature[unitVal].value)}
                </span>
                <div className="tempUnit">
                  <div className="degCon">
                    <img src="./images/Degree.svg" className="deg" />
                  </div>
                  <div className="unitCOrF">
                    &nbsp;&nbsp;
                    {currentCondition.temperature[unitVal].unit.toLowerCase()}
                  </div>
                </div>
              </div>
              <div className="real-feel">
                RealFeel&reg;
                {Math.round(
                  currentCondition.realFeelTemperature[unitVal].value
                )}
                &#176;
                {currentCondition.realFeelTemperature[
                  unitVal
                ].unit.toLowerCase()}
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="wind">
            <div>Wind</div>
            <div className="value">
              {currentCondition.wind[unitVal].direction.English}
              &ensp;
              {currentCondition.wind[unitVal].value}&nbsp;
              {currentCondition.wind[unitVal].unit}
            </div>
          </div>
          <div className="humidity">
            <div>Humidity</div>
            <div className="value">{currentCondition.relativeHumidity} %</div>
          </div>
          <div className="visibility">
            <div>Visibility</div>
            <div className="value">
              {" "}
              {currentCondition.visibility[unitVal].value}&nbsp;
              {currentCondition.visibility[unitVal].unit}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="weather-text">{currentCondition.weatherText}</div>
        <Link to={`forecast/${locationKey}/today`}>
          <div className="details">
            More Details&nbsp;
            <FaAngleRight className={"arrow-right"} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CurrConDiv;
