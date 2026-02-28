import { MapPin, Droplets, Wind, Thermometer } from "lucide-react";

function WeatherCard({ weather }) {
  if (!weather || !weather.weather) return null;

  const { name, main, wind, weather: details, sys } = weather;
  const { icon: iconCode, description } = details[0];
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`; // Using @4x for sharper quality

  return (
    <div className="mt-6 w-full max-w-md mx-auto animate-in fade-in zoom-in duration-500">
      
      {/* Location Tag */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <MapPin size={18} className="text-red-500 animate-bounce" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
          {name}, <span className="text-blue-600">{sys.country}</span>
        </h2>
      </div>

      {/* Main Temp & Icon Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-8 bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/50 shadow-xl">
        <div className="relative">
          <img 
            src={iconUrl} 
            alt={description} 
            className="w-32 h-32 sm:w-40 sm:h-40 drop-shadow-lg" 
          />
        </div>

        <div className="text-center sm:text-left">
          <div className="flex items-start justify-center sm:justify-start">
            <span className="text-7xl sm:text-8xl font-black text-gray-900 leading-none">
              {Math.round(main.temp)}
            </span>
            <span className="text-3xl sm:text-4xl font-bold text-blue-500 mt-2">°C</span>
          </div>
          <p className="capitalize text-gray-600 font-semibold text-lg mt-2 flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {description}
          </p>
        </div>
      </div>

      {/* Stats Grid - Responsive Column Swap */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-sm flex flex-col items-center sm:items-start transition-all hover:bg-white/80">
          <div className="flex items-center gap-2 text-blue-500 mb-1">
            <Droplets size={16} />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Humidity</span>
          </div>
          <p className="font-black text-xl text-gray-800">{main.humidity}%</p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-sm flex flex-col items-center sm:items-start transition-all hover:bg-white/80">
          <div className="flex items-center gap-2 text-blue-500 mb-1">
            <Wind size={16} />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Wind Speed</span>
          </div>
          <p className="font-black text-xl text-gray-800">{wind.speed} <span className="text-sm font-medium">m/s</span></p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;