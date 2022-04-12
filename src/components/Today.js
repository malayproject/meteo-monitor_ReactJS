import React from "react";
import { FaArrowsAltH, FaArrowUp, FaArrowDown } from "react-icons/fa";
import OneDayCon from "./OneDayCon";

const Today = ({
  locationKey,
  currentCondition,
  todayForecast,
  getLocalTime,
}) => {
  return (
    <div className="todayCon">
      {currentCondition && (
        <div className="currConDetailDiv">
          <div className="header">
            <div className="name">CURRENT WEATHER</div>
            <div className="time">
              {getLocalTime(currentCondition.dateTime)}
            </div>
          </div>
          <div className="middle">
            <div className="left">
              <div className="icon-temp">
                <img
                  src={`./images/weatherIcons/_${currentCondition.weatherIcon}.png`}
                  className={"icon"}
                />
                <div className="temp">
                  <div className="actual">
                    <span>
                      {Math.round(currentCondition.temperature?.metric?.value)}
                      &#176;
                    </span>
                    {currentCondition.temperature?.metric?.unit.toLowerCase()}
                  </div>
                  <div className="weather-text">
                    {currentCondition.weatherText}
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="real-feel">
                <div className="top">
                  RealFeel&reg;&ensp;
                  {Math.round(
                    currentCondition.realFeelTemperature?.metric.value
                  )}
                  &#176;
                  {currentCondition.realFeelTemperature?.metric.unit.toLowerCase()}
                </div>
                <span className="bottom">
                  {currentCondition.realFeelTemperatureShade?.metric.phrase}
                </span>
              </div>
              <div className="real-feel-shade">
                <div className="top">
                  RealFeelShade&reg;&ensp;
                  {Math.round(
                    currentCondition.realFeelTemperatureShade?.metric.value
                  )}
                  &#176;
                  {currentCondition.realFeelTemperatureShade?.metric.unit.toLowerCase()}
                </div>
                <span className="bottom">
                  {currentCondition.realFeelTemperatureShade?.metric.phrase}
                </span>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="left">
              <div className="wind">
                <div>Wind</div>
                <div className="value">
                  {currentCondition.wind?.metric.direction.English}
                  &ensp;
                  {currentCondition.wind?.metric.value}&nbsp;
                  {currentCondition.wind?.metric.unit}
                </div>
              </div>
              <div className="windGust">
                <div>Wind Gust</div>
                <div className="value">
                  {currentCondition.wind?.metric.value}&nbsp;
                  {currentCondition.wind?.metric.unit}
                </div>
              </div>
              <div className="relativeHumidity">
                <div>Rel. Humidity</div>
                <div className="value">
                  {currentCondition.relativeHumidity}%
                </div>
              </div>
              <div className="indoorRelativeHumidity">
                <div>Indoor Rel. Humidity</div>
                <div className="value">
                  {currentCondition.indoorRelativeHumidity}%
                </div>
              </div>
              <div className="duePoint">
                <div>Dew Point</div>
                <div className="value">
                  {currentCondition.duePoint?.metric.value}&nbsp;&#176;
                  {currentCondition.duePoint?.metric.unit.toLowerCase()}
                </div>
              </div>
            </div>
            <div className="right">
              <div className="pressure">
                <div>Pressure</div>
                <div className="value">
                  {currentCondition.pressureTendency === "R" ? (
                    <FaArrowUp />
                  ) : currentCondition.pressureTendency === "F" ? (
                    <FaArrowDown />
                  ) : (
                    <FaArrowsAltH />
                  )}
                  &ensp;
                  {currentCondition.pressure?.metric.value}&nbsp;
                  {currentCondition.pressure?.metric.unit}
                </div>
              </div>
              <div className="uvIndex">
                <div>Max UV Index</div>
                <div className="value">
                  {currentCondition.uvIndex}&nbsp;{currentCondition.uvIndexText}
                </div>
              </div>
              <div className="cloudCover">
                <div>Cloud Cover</div>
                <div className="value">{currentCondition.cloudCover}%</div>
              </div>
              <div className="cloudCeiling">
                <div>Cloud Ceiling</div>
                <div className="value">
                  {currentCondition.cloudCeiling?.metric.value}&nbsp;
                  {currentCondition.cloudCeiling?.metric.unit}
                </div>
              </div>
              <div className="visibility">
                <div>Visibility</div>
                <div className="value">
                  {currentCondition.visibility?.metric.value}&nbsp;
                  {currentCondition.visibility?.metric.unit}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {todayForecast && (
        <OneDayCon dayForecast={todayForecast} getLocalTime={getLocalTime} />
      )}
    </div>
  );
};

export default Today;
