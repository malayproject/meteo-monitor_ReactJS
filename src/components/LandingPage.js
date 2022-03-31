import axios from "axios";
import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import Loading from "./Loading";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coords, setCoords] = useState({ lat: 28.6448, long: 77.2167 });
  const [location, setLocation] = useState({
    area: "Delhi",
    country: "IN",
    locationKey: "202396",
    locationName: "Delhi",
  });

  const showPosition = (position) => {
    console.log("lat: ", position.coords.latitude);
    console.log("long: ", position.coords.longitude);
    console.log(position.coords);
    setCoords((coords) => ({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    }));
  };

  const showError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
      axios
        .get(
          `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_API_KEY2}&q=${coords.lat},${coords.long}&language=en-us&details=false&toplevel=true`
        )
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setLocation((location) => ({
            ...location,
            locationKey: res.data.Key,
            locationName: res.data.EnglishName,
            area: res.data.AdministrativeArea.EnglishName,
            country: res.data.Country.ID,
          }));
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="landingPage">
      {isLoading ? (
        <Loading />
      ) : (
        <Landing location={location} isLoading={isLoading} />
      )}
    </div>
  );
};

export default LandingPage;
