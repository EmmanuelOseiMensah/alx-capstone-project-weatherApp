const FiveDaysForecast = ({ forecast, cityName }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">5-Day Forecast of {cityName} </h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {forecast.map((item) => {
          const { dt, main, weather } = item;
          const date = new Date(dt * 1000).toLocaleDateString("en-GH", {
            weekday: "short",
            day: "numeric",
          });

          const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

          return (
            <div key={dt} className="bg-white p-3 rounded-xl text-center border shadow-sm hover:shadow-md transition">
              <p className="text-xs font-semibold text-gray-500 uppercase">{date}</p>
              <img src={iconUrl} alt={weather[0].description} className="w-12 h-12 mx-auto" />
              <p className="text-lg font-bold text-gray-800">{Math.round(main.temp)}°C</p>
              <p className="text-[10px] text-gray-400 capitalize">{weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FiveDaysForecast;