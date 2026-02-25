 function DynamicBackground({ weather, children }) {
  const getGradient = () => {
    if (!weather) return "from-sky-400 to-blue-600";

    const main = weather.weather[0].main;

    switch (main) {
      case "Clear":
        return "from-yellow-300 to-orange-400";

      case "Clouds":
        return "from-slate-400 to-slate-600";

      case "Rain":
      case "Drizzle":
        return "from-gray-500 to-gray-700";

      case "Thunderstorm":
        return "from-gray-800 to-black";

      case "Snow":
        return "from-blue-100 to-blue-300";

      default:
        return "from-sky-400 to-blue-600";
    }
  };

  return (
    <div
      className={`min-h-screen bg-linear-to-br ${getGradient()} flex items-center justify-center px-4 transition-all duration-500`}
    >
      {children}
    </div>
  );
}
export default DynamicBackground;