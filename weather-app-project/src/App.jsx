import { useState } from "react";
import { Loader2 } from "lucide-react";
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FiveDaysForecast from "./components/FiveDaysForecast";
import DynamicBackground from "./components/DynamicBackground";
import useWeather from "./hooks/useWeather";
import Weatherlogo from "./assets/weather-icon.webp";

function App() {
  const [searchInput, setSearchInput] = useState("Kumasi");
  const [activeCity, setActiveCity] = useState("Kumasi");

  // Hook returns both weather AND forecast
  const { weather, forecast, loading, error } = useWeather(activeCity);

  const handleSearch = () => {
    const trimmed = searchInput.trim();
    if (trimmed) setActiveCity(trimmed);
  };

  return (
    <DynamicBackground weather={weather}>
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl 
                      bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl 
                      p-6 sm:p-10 m-4 border border-white/20">
        
        <header className="flex flex-col sm:flex-row items-center justify-center mb-8 gap-4">
          <img src={Weatherlogo} alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl sm:text-3xl font-black text-gray-800 tracking-tight">
            SkyCast <span className="text-blue-500">Weather</span>
          </h1>
        </header>

        <SearchBar 
          city={searchInput} 
          setCity={setSearchInput} 
          onSearch={handleSearch} 
        />

        <main className="mt-8 min-h-100">
          {loading ? (
            <div className="flex flex-col justify-center items-center py-24">
              <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
              <p className="mt-4 font-bold text-gray-400 animate-pulse uppercase tracking-widest text-xs">
                Fetching Updates...
              </p>
            </div>
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <div className="space-y-12 animate-in fade-in zoom-in duration-500">
              <WeatherCard weather={weather} />
              
              {forecast.length > 0 && (
                <div className="pt-10 border-t border-gray-100/50">
                  <FiveDaysForecast 
                    forecast={forecast} 
                    cityName={weather?.name || activeCity} 
                  />
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </DynamicBackground>
  );
}

export default App;