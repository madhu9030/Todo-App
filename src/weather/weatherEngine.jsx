import React, { useState, useEffect } from "react";
import Weather from "./weather.jsx";

function WeatherEngine(props) {
  const intialSearch = props.intialSearch;
  const [search, searchCity] = useState(intialSearch);
  const [childSearch, childSearchCity] = useState(intialSearch);
  const [weather, setWeather] = useState({
    temp: "",
    type: "",
    country: "",
    feelsLike: "",
    city: "",
    id: "",
    error: "",
  });

  // get the child Component input search value
  const getChildInputValue = (getValue) => {
    childSearchCity(getValue);
  };

  // get data using Promiseses
  function updatePromise(e) {
    //console.log(childSearch)
    const promise = new Promise((reslove, reject) => {
      reslove(
        fetch(
          `http://api.timezonedb.com/v2.1/get-time-zone?key=P75QOPRLSKVS&format=json&by=zone&zone=America/${childSearch}`
        )
          .then((response) => {
            return response.json();
          })
          .catch((e) => e)
      );
    });
    promise.then((result) => {
      console.log(result);
    });
  }

  {
    /* Make API call using Promise */
  }

  const getWeather = async (q) => {
    //console.log(isNaN(search))
    let checkUserValue;
    const checkCharPattern = /[1-9]/g;
    const checkNumPattern = /[a-z, A-Z]/gi;
    const checkPatteren =
      search.match(checkCharPattern) && search.match(checkNumPattern);
    console.log(Boolean(checkPatteren));
    if (isNaN(search)) {
      checkUserValue = `q=${search}`;
    } else {
      checkUserValue = `zip=${search}`;
    }
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?${checkUserValue}&units=metric&APPID=e04a7cbcb82de0f319fb66a3e5d643fe`
    );
    const resJson = await apiRes.json();
    return resJson;
  };

  // Update the weather each time user search
  const updateweather = (search) => {
    getWeather(search).then((res) => {
      // console.log(res)
      return res.main
        ? setWeather({
            temp: res.main.temp,
            type: res.weather[0]["main"],
            country: res.sys.country,
            feelsLike: res.main.feels_like,
            city: res.name,
            id: res.id,
          })
        : setWeather({
            error: res.message,
          });
    });
  };

  // OnClick of search button this function calls updateweather method and return new data
  const handleSearch = (event) => {
    event.preventDefault();
    updateweather(search);
  };

  // It will  execute only onload to update default search
  useEffect(() => {
    updateweather(intialSearch);
  }, [intialSearch]);
  const inputFocus = (e) => {
    if (e.target.value !== "") {
      e.target.classList.value = "focused";
      console.log(e.target.classList);
    }
  };
  const id = `search-${Math.random() * 3}`;
  return (
    <div>
      <div className="App">
        <form className="search">
          <input
            id={id}
            onFocus={(e) => inputFocus(e)}
            type="text"
            value={search}
            onChange={(e) => searchCity(e.target.value)}
            className={search ? "focused" : ""}
          />
          <label htmlFor={id}>Zipcode or City</label>
          <button onClick={(e) => handleSearch(e)}>Search</button>
        </form>
        <Weather
          temp={weather.temp}
          type={weather.type}
          city={weather.city}
          country={weather.country}
          feelsLike={weather.feelsLike}
          id={weather.id}
          error={weather.error}
          childChange={getChildInputValue}
          clickBack={updatePromise}
          inputValue={childSearch}
        />
      </div>
    </div>
  );
}

export default WeatherEngine;
