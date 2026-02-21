import {useState} from 'react';
import  ErrorMessage from './components/ErrorMessage';
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";


function App() {
   const[city, setCity] = useState("");
   const [weather, setWeather] =useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");

   const fetchWeatherData = async ( ) => {
    if(!city) {
      setError("Please enter a city name");
      return;
    }
    setLoading(true);
    setError(" ");
    setWeather(null);
    
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

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

        </div>
    </div>
  );
}

export default App;
