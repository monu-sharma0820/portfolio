import React, { useRef, useState } from 'react';
import fetchdata from '../Utilities/fetchdata';

function Weather() {
  const cityRef = useRef();
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState('');

  const getWeather = async (e) => {
    e.preventDefault();
    const city = cityRef.current.value.trim();
    setQuery(city);

    const apiKey = 'c6fb83396b512ab101cc964642819af8'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const result = await fetchdata(url);
    setWeather(result);
  };

  return (
    <div className="container py-5">
      <h3 className="mb-4">🌤️ Weather App</h3>

      <form onSubmit={getWeather} className="d-flex mb-4">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Enter city name"
          ref={cityRef}
        />
        <button className="btn btn-primary">Get Weather</button>
      </form>

      {weather && weather.main ? (
        <div className="card p-3 shadow-sm">
          <h4>{weather.name}, {weather.sys.country}</h4>
          <p>🌡️ Temp: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌥️ Condition: {weather.weather[0].description}</p>
        </div>
      ) : query && (
        <p className="text-danger"> City "{query}" not found or API error.</p>
      )}
    </div>
  );
}

export default Weather;
