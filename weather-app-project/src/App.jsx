import {useState} from 'react';
import  ErrorMessage from './components/ErrorMessage';
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FiveDaysForecast from "./components/FiveDaysForecast"

function App() {
   const[city, setCity] = useState("");
   const [weather, setWeather] =useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");

   // Added a state for forecast
  const [forecast, setForecast] = useState([]);

   const fetchWeatherData = async ( ) => {
    if(!city) {
      setError("Please enter a city name");
      return;
    }
    setLoading(true);
    setError("");
    setWeather(null);
    
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;


      const forecast_response = await fetch(forecast_url);
      if (!forecast_response.ok) throw new Error("Failed to fetch forecast data");
      const forecast_data = await forecast_response.json();
      console.log(forecast_data);

      // Filter forecast data to get only midday entries for the next 5 days
      const midday_forecast = forecast_data.list.filter(item => {
        const date = new Date(item.dt * 1000);
        return date.getHours() === 12; // Get entries for 12:00 PM
      }).slice(0, 5); // Get forecast for the next 5 days

      setForecast(midday_forecast);

      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 to-blue-600 flex items-center
    justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
            <h1 className="text-3xl font-bold">Weather Dashboard</h1>

            <SearchBar city={city} setCity={setCity} onSearch={fetchWeatherData} />
            {loading && <p className="text-center text-gray-500 mt-4">Fetching weather ...</p>}
            <ErrorMessage message={error} />
            <WeatherCard weather={weather} />
            <FiveDaysForecast forecast={forecast} />

        </div>
    </div>
  );
}

export default App;
