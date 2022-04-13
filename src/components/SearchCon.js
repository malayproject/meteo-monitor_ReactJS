import React from "react";

import SearchResults from "./SearchResults";

const SearchCon = () => {
  const searchResultsEl = useRef(null);
  const searchBarConEl = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchResultsShown, setIsSearchResultsShown] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    console.log(searchTerm);
    if (searchTerm) {
      try {
        axios
          .get(
            `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY1}&q=${searchTerm}&language=en-us`
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

  return (
    <>
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
          onClick={() => {
            setIsSearchResultsShown(true);
            searchBarConEl.current.classList.add("on-focus");
          }}
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
    </>
  );
};

export default SearchCon;
