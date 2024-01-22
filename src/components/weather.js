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
            {weather.temperature}°C
          </span>
        </p>
        <p>Conditions: {weather.conditions}</p>
      </div>
    );
  };

  // Sample weather input
  const sampleWeather = { temperature: 20, conditions: "Sunny" };

  return (
    <div>
      <h1>Weather App</h1>
      {displayWeather(sampleWeather)}
    </div>
  );
};

export default WeatherApp;
