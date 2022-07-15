import React from "react";

const Weather = (props) => {
  let cls = "cold";
  let img = "";
  if (props.temp > 12) {
    cls = "hot";
    img = "sunny";
  } else if (props.temp <= 12) {
    cls = "cold";
    img = "cloud";
  }

  return (
    <div className="wa-wrapper">
      <div
        id={props.id}
        className={`weather-main ${cls} ${props.temp !== "" ? "flip" : ""}`}
      >
        {/* Search weather from child component */}
        {/* <input id={props.id} value={props.inputValue} onChange={(e => props.childChange(e.target.value))} />
            <button onClick={e => props.clickBack(e)}>Search</button> */}

        {props.temp === "" ? (
          <div className="spinner"></div>
        ) : props.error ? (
          <div className="error">{props.error}</div>
        ) : (
          <div className="fade-in">
            <div className="weather-city">
              <h2>{props.city}</h2>
              <h4>{props.country}</h4>
            </div>
            <img src={`./images/${img}.png`} alt="" className="weather-logo" />
            <h2 className="weather-temp">{`${props.temp} °C`}</h2>
            <h4>{`Feels like ${props.feelsLike} °C`}</h4>
            <div className="weather-type">{props.type}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
