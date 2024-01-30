import React from "react";
import "./../styles/App.css";

const WeatherApp = () => {
  const displayWeather = (weather) => {
    let temperatureColor = "blue";
    if (weather.temperature > 20) {
      temperatureColor = "red";
    }

    return (
      <div>
        <p>
          Temperature:{" "}
          <span style={{ color: temperatureColor }}>
            {weather.temperature}
          </span>
        </p>
        <p>Conditions: {weather.conditions}</p>
      </div>
    );
  };

  // Adjusted sampleWeather to have a temperature of 20
  const sampleWeather = { temperature: 25, conditions: "Sunny" };

  return (
    <div>
      <h1>Weather App</h1>
      {displayWeather(sampleWeather)}
    </div>
  );
};

export default WeatherApp;
