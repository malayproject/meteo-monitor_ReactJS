import React, { useState, useEffect } from "react";
import { useParams, NavLink, Routes, Route } from "react-router-dom";
import Today from "./Today";
import Hourly from "./Hourly";
import Daily from "./Daily";
import axios from "axios";

const ForecastPage = ({ currentCondition, setCurrentCondition, keyNo }) => {
  const { locationKey } = useParams();
  const [fiveDForecasts, setFiveDForecasts] = useState(null);

  const getLocalDateTime = (dateTime, getDate) => {
    if (!dateTime) return "";
    if (getDate) {
      let date = dateTime.slice(5, 10).split("-").join("/");
      return date;
    }
    let hrsin24 = dateTime.slice(11, 13);
    let temp =
      hrsin24 > 12
        ? hrsin24 - 12 > 9
          ? `${hrsin24 - 12}${dateTime.slice(13, 16)} PM`
          : `0${hrsin24 - 12}${dateTime.slice(13, 16)} PM`
        : `${hrsin24}${dateTime.slice(13, 16)} AM`;
    console.log(temp);
    return temp;
  };

  const getFiveDForecasts = () => {
    if (fiveDForecasts) return;
    try {
      axios
        .get(
          `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${
            process.env[`REACT_APP_API_KEY${keyNo}`]
          }&details=true&metric=true`
        )
        .then((res) => {
          console.log(res.data.DailyForecasts);
          setFiveDForecasts(res.data.DailyForecasts);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFiveDForecasts();
    try {
      if (currentCondition) return;
      axios
        .get(
          `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${
            process.env[`REACT_APP_API_KEY${keyNo}`]
          }&details=true`
        )
        .then((res) => {
          // console.log(res.data[0]);
          let rawdata = res.data[0];
          setCurrentCondition({
            ...currentCondition,
            dateTime: rawdata.LocalObservationDateTime,
            weatherIcon: rawdata.WeatherIcon,
            weatherText: rawdata.WeatherText,
            isDayTime: rawdata.isDayTime,
            temperature: {
              metric: {
                unit: rawdata.Temperature.Metric.Unit,
                value: rawdata.Temperature.Metric.Value,
              },
              imperial: {
                unit: rawdata.Temperature.Imperial.Unit,
                value: rawdata.Temperature.Imperial.Value,
              },
            },
            realFeelTemperature: {
              metric: {
                unit: rawdata.RealFeelTemperature.Metric.Unit,
                value: rawdata.RealFeelTemperature.Metric.Value,
                phrase: rawdata.RealFeelTemperature.Metric.Phrase,
              },
              imperial: {
                unit: rawdata.RealFeelTemperature.Imperial.Unit,
                value: rawdata.RealFeelTemperature.Imperial.Value,
                phrase: rawdata.RealFeelTemperature.Metric.Phrase,
              },
            },
            realFeelTemperatureShade: {
              metric: {
                unit: rawdata.RealFeelTemperatureShade.Metric.Unit,
                value: rawdata.RealFeelTemperatureShade.Metric.Value,
                phrase: rawdata.RealFeelTemperatureShade.Metric.Phrase,
              },
              imperial: {
                unit: rawdata.RealFeelTemperatureShade.Imperial.Unit,
                value: rawdata.RealFeelTemperatureShade.Imperial.Value,
                phrase: rawdata.RealFeelTemperatureShade.Metric.Phrase,
              },
            },
            wind: {
              metric: {
                direction: rawdata.Wind.Direction,
                unit: rawdata.Wind.Speed.Metric.Unit,
                value: rawdata.Wind.Speed.Metric.Value,
              },
              imperial: {
                direction: rawdata.Wind.Direction,
                unit: rawdata.Wind.Speed.Imperial.Unit,
                value: rawdata.Wind.Speed.Imperial.Value,
              },
            },
            windGust: {
              metric: {
                unit: rawdata.WindGust.Speed.Metric.Unit,
                value: rawdata.WindGust.Speed.Metric.Value,
              },
              imperial: {
                unit: rawdata.WindGust.Speed.Imperial.Unit,
                value: rawdata.WindGust.Speed.Imperial.Value,
              },
            },
            cloudCeiling: {
              metric: {
                unit: rawdata.Ceiling.Metric.Unit,
                value: rawdata.Ceiling.Metric.Value,
              },
              imperial: {
                unit: rawdata.Ceiling.Imperial.Unit,
                value: rawdata.Ceiling.Imperial.Value,
              },
            },
            pressure: {
              metric: {
                unit: rawdata.Pressure.Metric.Unit,
                value: rawdata.Pressure.Metric.Value,
              },
              imperial: {
                unit: rawdata.Pressure.Imperial.Unit,
                value: rawdata.Pressure.Imperial.Value,
              },
            },
            visibility: {
              metric: {
                unit: rawdata.Visibility.Metric.Unit,
                value: rawdata.Visibility.Metric.Value,
              },
              imperial: {
                unit: rawdata.Visibility.Imperial.Unit,
                value: rawdata.Visibility.Imperial.Value,
              },
            },
            duePoint: {
              metric: {
                unit: rawdata.DewPoint.Metric.Unit,
                value: rawdata.DewPoint.Metric.Value,
              },
              imperial: {
                unit: rawdata.DewPoint.Imperial.Unit,
                value: rawdata.DewPoint.Imperial.Value,
              },
            },
            cloudCover: rawdata.CloudCover,
            hasPrecipitaion: rawdata.HasPrecipitation,
            relativeHumidity: rawdata.RelativeHumidity,
            indoorRelativeHumidity: rawdata.IndoorRelativeHumidity,
            pressureTendency: rawdata.PressureTendency.Code,
            uvIndex: rawdata.UVIndex,
            uvIndexText: rawdata.UVIndexText,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="forecastPage">
      <div className="forecastBarCon">
        <div className="forecastBar">
          <NavLink to={"today"} className="today">
            TODAY
          </NavLink>
          {/* <NavLink to={"hourly"} className="hourly">
          HOURLY
        </NavLink> */}
          <NavLink to={"daily"} className="daily">
            DAILY
          </NavLink>
        </div>
      </div>

      {console.log(fiveDForecasts)}
      <Routes>
        <Route
          path={"today"}
          element={
            fiveDForecasts && (
              <Today
                locationKey={locationKey}
                currentCondition={currentCondition}
                todayForecast={fiveDForecasts[0]}
                getLocalDateTime={getLocalDateTime}
              />
            )
          }
        />
        {/* <Route path={"hourly"} element={<Hourly />} /> */}
        <Route
          path={"daily"}
          element={
            fiveDForecasts && (
              <Daily
                locationKey={locationKey}
                fiveDForecast={fiveDForecasts}
                getLocalDateTime={getLocalDateTime}
              />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default ForecastPage;
