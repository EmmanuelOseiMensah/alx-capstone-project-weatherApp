const FiveDaysForecast = ({ forecast, cityName }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="mt-8 w-full">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800 px-1">
        5-Day Forecast for <span className="text-blue-600">{cityName}</span>
      </h2>
      
      {/* Mobile: 1 column (vertical list)
          Tablet: 3 columns
          Desktop: 5 columns 
      */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {forecast.map((item) => {
          const { dt, main, weather } = item;
          const date = new Date(dt * 1000).toLocaleDateString("en-GH", {
            weekday: "short",
            day: "numeric",
          });

          const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

          return (
            <div 
              key={dt} 
              className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl 
                         flex flex-row sm:flex-col items-center justify-between sm:justify-center
                         border border-white/20 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="text-left sm:text-center">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{date}</p>
                <p className="hidden sm:block text-[10px] text-gray-400 capitalize mt-1">
                  {weather[0].description}
                </p>
              </div>

              <img 
                src={iconUrl} 
                alt={weather[0].description} 
                className="w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform" 
              />

              <div className="text-right sm:text-center">
                <p className="text-xl sm:text-2xl font-black text-gray-800">
                  {Math.round(main.temp)}°C
                </p>
                {/* Show description next to temp ONLY on mobile row view */}
                <p className="sm:hidden text-[10px] text-gray-400 capitalize">
                  {weather[0].description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDaysForecast;