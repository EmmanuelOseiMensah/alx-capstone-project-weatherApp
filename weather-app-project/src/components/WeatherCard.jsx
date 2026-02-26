function WeatherCard({ weather }) {
  // 1. Safety check remains at the top
  if (!weather || !weather.weather) return null;

  // 2. Destructure 'sys' so we can access the country code
  const { name, main, wind, weather: details, sys } = weather;
  
  const iconCode = details[0].icon;
  const description = details[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="mt-6 text-center animate-fade-in">
      
      {/* ✅ ADDED HERE: Name and Country Code */}
      <h2 className="text-xl font-semibold text-gray-700 flex items-center justify-center gap-1">
        📍 {name}, {sys.country}
      </h2>

      <img 
        src={iconUrl} 
        alt={description} 
        className="mx-auto drop-shadow-sm" 
      />

      <div className="flex items-center justify-center gap-2 my-4">
        <p className="text-6xl font-bold text-blue-500">
          {Math.round(main.temp)}℃
        </p>
      </div>

      <p className="capitalize text-gray-600 font-medium">
        ✨ {description}
      </p>

      {/* Stats Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="bg-blue-50 rounded-xl p-3 border border-blue-100 transition-transform hover:scale-105">
          <p className="text-gray-500 mb-1">💧 Humidity</p>
          <p className="font-bold text-lg text-gray-800">{main.humidity}%</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-3 border border-blue-100 transition-transform hover:scale-105">
          <p className="text-gray-500 mb-1">💨 Wind Speed</p>
          <p className="font-bold text-lg text-gray-800">{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;