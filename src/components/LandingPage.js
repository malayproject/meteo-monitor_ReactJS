import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Loading from "./Loading";
import SearchResults from "./SearchResults";

import CurrConDiv from "./CurrConDiv";

const LandingPage = ({
  getNavbarProps,
  location,
  setLocation,
  keyNo,
  isMetric,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentCondition, setCurrentCondition] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [isSearchResultsShown, setIsSearchResultsShown] = useState(false);

  const searchResultsEl = useRef(null);
  const searchBarConEl = useRef(null);

  const getSearchBarOnFocus = () => {
    setIsSearchResultsShown(true);
    searchBarConEl.current.classList.add("on-focus");
  };

  const showPosition = ({ coords }) => {
    // console.log("lat: ", coords.latitude);
    // console.log("long: ", coords.longitude);
    // console.log(coords);

    axios
      .get(
        `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${
          process.env[`REACT_APP_API_KEY${keyNo}`]
        }&q=${coords.latitude},${
          coords.longitude
        }&language=en-us&details=false&toplevel=true`
      )
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        setLocation((location) => ({
          ...location,
          locationKey: res.data.Key,
          locationName: res.data.LocalizedName,
          area: res.data.AdministrativeArea.LocalizedName,
          country: res.data.Country.ID,
        }));
      });
  };

  const showError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    try {
      axios
        .get(
          `https://dataservice.accuweather.com/currentconditions/v1/${
            location.locationKey
          }?apikey=${process.env[`REACT_APP_API_KEY${keyNo}`]}&details=true`
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
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [location]);

  useEffect(() => {
    // console.log(searchTerm);
    if (searchTerm) {
      try {
        axios
          .get(
            `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${
              process.env[`REACT_APP_API_KEY${keyNo}`]
            }&q=${searchTerm}&language=en-us`
          )
          .then((res) => {
            console.log(res);
            setRecommendations(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchTerm]);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  };

  useEffect(() => {
    getNavbarProps(location, isLoading, currentCondition);
  }, [location, isLoading, currentCondition]);

  useEffect(() => {
    try {
      getCurrentLocation();
      window.addEventListener("click", (e) => {
        // console.dir(e.target);
        if (
          searchBarConEl.current &&
          !searchBarConEl.current.contains(e.target)
        ) {
          // console.log("hello");
          setIsSearchResultsShown(false);
          searchBarConEl.current.classList.remove("on-focus");
        }
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    location && (
      <div className="landingPage">
        {/* {console.log(isSearchResultsShown)} */}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="landing">
            {isLoading || (
              <div className="landingRest">
                {/* {console.log(searchTerm)} */}
                <div className="searchBarCon" ref={searchBarConEl}>
                  <img src={"./images/search.svg"} />
                  <label htmlFor="browser"></label>
                  <input
                    type="text"
                    value={searchTerm}
                    placeholder={"Search"}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                    onClick={getSearchBarOnFocus}
                    name="browser"
                    autoComplete="true"
                  />
                </div>
                {isSearchResultsShown && (
                  <SearchResults
                    recommendations={recommendations}
                    setLocation={setLocation}
                    location={location}
                    getCurrentLocation={getCurrentLocation}
                    setSearchTerm={setSearchTerm}
                    ref={searchResultsEl}
                  />
                )}
                {currentCondition && (
                  <CurrConDiv
                    locationKey={location.locationKey}
                    currentCondition={currentCondition}
                    isMetric={isMetric}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    )
  );
};

export default LandingPage;
