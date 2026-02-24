const FiveDaysForecast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">5-Day Forecast (Midday)</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {forecast.map((item, index) => {
          const date = new Date(item.dt * 1000).toLocaleDateString("en-GH", {
            weekday: "short",
            day: "numeric",
          });

          return (
            <div key={index} className="bg-gray-50 p-3 rounded-xl text-center border">
              <p className="text-xs font-semibold text-gray-500 uppercase">{date}</p>
              <img
                src={`https://openweathermap.org{item.weather[0].icon}.png`}
                alt="icon"
                className="w-12 h-12 mx-auto"
              />
              <p className="text-lg font-bold">{Math.round(item.main.temp)}°C</p>
              <p className="text-[10px] text-gray-400 capitalize">
                {item.weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDaysForecast;
