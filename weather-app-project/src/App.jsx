import { useState, useCallback } from "react";
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FiveDaysForecast from "./components/FiveDaysForecast";
import DynamicBackground from "./components/DynamicBackground";
import useWeather from "./hooks/useWeather";
import Weatherlogo from "./assets/weather-icon.webp";

function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [isForecastLoading, setIsForecastLoading] = useState(false);

  // Use our custom hook for current weather
  const { weather, loading, error, refresh } = useWeather(city);

  const fetchForecast = useCallback(async (searchCity) => {
    if (!searchCity) return;

    try {
      setIsForecastLoading(true);
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${API_KEY}&units=metric`;

      const res = await fetch(forecast_url);
      if (!res.ok) throw new Error("Forecast data unavailable");

      const data = await res.json();

      // Logic check: Filter for midday (12:00) to get one reading per day
      const midday_forecast = data.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5);

      setForecast(midday_forecast);
    } catch (err) {
      console.error("Forecast Error:", err.message);
      setForecast([]); // Clear forecast on error
    } finally {
      setIsForecastLoading(false);
    }
  }, []);

  // Wrapper function to trigger both fetches at once
  const handleSearch = () => {
    if (!city.trim()) return;
    refresh(); // From useWeather hook
    fetchForecast(city);
  };

  return (
    <DynamicBackground weather={weather}>
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 m-4">
        <header className="flex items-center justify-center mb-6">
          <img
            src={Weatherlogo}
            alt="weather-logo"
            className="w-12 h-12 mr-3"
          />
          <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            Weather Dashboard
          </h1>
        </header>

        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

        {/* Loading Indicator */}
        {(loading || isForecastLoading) && (
          <div className="flex justify-center items-center mt-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="ml-3 text-sm text-gray-500">Updating weather...</p>
          </div>
        )}

        {/* Conditional Rendering */}
        {!loading && (
          <>
            <ErrorMessage message={error} />
            <WeatherCard weather={weather} />
            <FiveDaysForecast 
            forecast={forecast} 
             cityName={weather?.name || "Unknown City"}/>
          </>
        )}
      </div>
    </DynamicBackground>
  );
}

export default App;