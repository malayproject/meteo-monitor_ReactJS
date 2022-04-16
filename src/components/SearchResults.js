import React, { forwardRef, useRef } from "react";

const SearchResults = forwardRef(
  (
    {
      recommendations,
      setLocation,
      location,
      getCurrentLocation,
      setSearchTerm,
    },
    ref
  ) => {
    return (
      <div className="searchResults" ref={ref}>
        <div
          className="useCurrLocation hoverable"
          onClick={() => {
            getCurrentLocation();
            setSearchTerm("");
          }}
        >
          <img src={"./images/location.svg"}></img>
          Use Current Location
        </div>
        {recommendations.map((rec) => {
          return (
            <div
              key={rec.Key}
              className="searchResult hoverable"
              onClick={() => {
                setLocation({
                  ...location,
                  locationKey: rec.Key,
                  locationName: rec.LocalizedName,
                  area: rec.AdministrativeArea.LocalizedName,
                  country: rec.Country.ID,
                });
                setSearchTerm("");
              }}
            >
              {rec.LocalizedName}, {rec.AdministrativeArea.LocalizedName},{" "}
              {rec.Country.ID}
            </div>
          );
        })}
      </div>
    );
  }
);

export default SearchResults;
