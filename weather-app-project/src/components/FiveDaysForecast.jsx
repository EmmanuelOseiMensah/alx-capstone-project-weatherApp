const FiveDaysForecast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">5-Day Forecast</h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {forecast.map((item, index) => {
          const date = new Date(item.dt * 1000).toLocaleDateString("en-GH", {
            weekday: "short",
            day: "numeric",
          });

          const iconCode = item.weather[0].icon;
          const description = item.weather[0].description;
          const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

          return (
            <div
              key={item.dt}
              className="bg-gray-50 p-3 rounded-xl text-center border"
            >
              <p className="text-xs font-semibold text-gray-500 uppercase">
                {date}
              </p>

              <img
                src={iconUrl}
                alt={description}
                className="w-12 h-12 mx-auto"
              />

              <p className="text-lg font-bold">
                {Math.round(item.main.temp)}°C
              </p>

              <p className="text-[10px] text-gray-400 capitalize">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDaysForecast;