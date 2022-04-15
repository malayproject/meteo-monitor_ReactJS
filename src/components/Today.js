import React from "react";
import { FaArrowsAltH, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Loading from "./Loading";
import OneDayCon from "./OneDayCon";

const Today = ({
  locationKey,
  currentCondition,
  todayForecast,
  getLocalDateTime,
  isMetric,
}) => {
  const unitVal = isMetric ? "metric" : "imperial";

  return (
    <div className="todayCon">
      {currentCondition && (
        <div className="currConDetailDiv tile dark">
          <div className="header">
            <div className="name">CURRENT WEATHER</div>
            <div className="time">
              {getLocalDateTime(currentCondition.dateTime)}
            </div>
          </div>
          <div className="middle">
            <div className="left">
              <div className="icon-temp">
                <img
                  src={`../../images/weatherIcons/${currentCondition.weatherIcon}.png`}
                  className={"icon"}
                />
                <div className="temp">
                  <div className="actual">
                    <span>
                      {Math.round(currentCondition.temperature[unitVal].value)}
                    </span>
                    <div className="tempUnit">
                      <div className="deg">
                        <img
                          src="/meteo-monitor_ReactJS/images/Degree.svg"
                          className="deg"
                        />
                      </div>
                      <div className="unitCOrF">
                        &nbsp;&nbsp;
                        {currentCondition.temperature[
                          unitVal
                        ].unit.toLowerCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="weather-text">{currentCondition.weatherText}</div>
            </div>
            <div className="right">
              <div className="real-feel">
                <div className="top">
                  RealFeel&reg;&ensp;
                  {Math.round(
                    currentCondition.realFeelTemperature[unitVal].value
                  )}
                  &#176;
                  {currentCondition.realFeelTemperature[
                    unitVal
                  ].unit.toLowerCase()}
                </div>
                <span className="bottom">
                  {currentCondition.realFeelTemperatureShade[unitVal].phrase}
                </span>
              </div>
              <div className="real-feel-shade">
                <div className="top">
                  RealFeelShade&reg;&ensp;
                  {Math.round(
                    currentCondition.realFeelTemperatureShade[unitVal].value
                  )}
                  &#176;
                  {currentCondition.realFeelTemperatureShade[
                    unitVal
                  ].unit.toLowerCase()}
                </div>
                <span className="bottom">
                  {currentCondition.realFeelTemperatureShade[unitVal].phrase}
                </span>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="left">
              <div className="wind">
                <div>Wind</div>
                <div className="value">
                  {currentCondition.wind[unitVal].direction.English}
                  &ensp;
                  {currentCondition.wind[unitVal].value}&nbsp;
                  {currentCondition.wind[unitVal].unit}
                </div>
              </div>
              <div className="windGust">
                <div>Wind Gust</div>
                <div className="value">
                  {currentCondition.wind[unitVal].value}&nbsp;
                  {currentCondition.wind[unitVal].unit}
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
                  {currentCondition.duePoint[unitVal].value}&nbsp;&#176;
                  {currentCondition.duePoint[unitVal].unit.toLowerCase()}
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
                  {currentCondition.pressure[unitVal].value}&nbsp;
                  {currentCondition.pressure[unitVal].unit}
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
                  {currentCondition.cloudCeiling[unitVal].value}&nbsp;
                  {currentCondition.cloudCeiling[unitVal].unit}
                </div>
              </div>
              <div className="visibility">
                <div>Visibility</div>
                <div className="value">
                  {currentCondition.visibility[unitVal].value}&nbsp;
                  {currentCondition.visibility[unitVal].unit}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {todayForecast && (
        <OneDayCon
          dayForecast={todayForecast}
          getLocalDateTime={getLocalDateTime}
        />
      )}
    </div>
  );
};

export default Today;
