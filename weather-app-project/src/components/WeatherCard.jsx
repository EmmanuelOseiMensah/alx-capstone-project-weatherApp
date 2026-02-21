function WeatherCard({weather}) {
   if(!weather) return null;

  return (
    <div className="mt-6 text-center">
      <h2 className="text-xl font-semibold text-gray-700">{weather.name}</h2>
      <p className="text-6xl font-bold text-blue-500 my-4">{Math.round(weather.main.temp)}℃</p>
      <p className="capitalize text-gray-600">{weather.weather[0].description}</p>
      
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">

            <div className="bg-blue-50 round-lg p-3">
                 <p className="text-gray-500">💧 Humidity</p>
                 <p className="font-semibold">{weather.main.humidity}</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-3">
                 <p className="text-gray-500">💨 Wind Speed</p>
                 <p className="font-semibold">{weather.wind.speed}m/s</p>
            </div>
          </div>
          
    </div>
  );
}

export default WeatherCard;
