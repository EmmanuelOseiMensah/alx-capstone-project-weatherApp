function DynamicBackground({ weather, children }) {
  const getGradient = () => {
    if (!weather) return "from-sky-400 via-blue-500 to-indigo-600";

    const condition = weather.weather[0].main;

    switch (condition) {
      case "Clear":
        // Sunny/Golden Hour feel
        return "from-amber-400 via-orange-400 to-yellow-500";
      case "Clouds":
        // Soft Overcast feel
        return "from-slate-300 via-gray-400 to-slate-500";
      case "Rain":
      case "Drizzle":
        // Moody Deep Blue/Teal
        return "from-blue-700 via-slate-600 to-gray-800";
      case "Thunderstorm":
        // Dark Electric feel
        return "from-gray-900 via-purple-900 to-black";
      case "Snow":
        // Crisp White/Blue
        return "from-blue-50 via-indigo-100 to-white";
      case "Mist":
      case "Haze":
      case "Fog":
        // Ethereal/Soft Grey
        return "from-zinc-300 via-gray-200 to-slate-400";
      default:
        return "from-sky-400 via-blue-500 to-indigo-600";
    }
  };

  return (
    <div className={`relative min-h-screen w-full flex items-center justify-center px-4 transition-colors duration-1000 ease-in-out bg-gradient-to-br ${getGradient()}`}>
      
      {/* Subtle Animated Overlay (The "Pro" Touch) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-black/10 blur-[120px] animate-bounce duration-[10s]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex justify-center">
        {children}
      </div>
    </div>
  );
}

export default DynamicBackground;