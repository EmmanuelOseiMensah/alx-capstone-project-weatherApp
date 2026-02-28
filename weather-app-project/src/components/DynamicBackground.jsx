function DynamicBackground({ weather, children }) {
  const getGradient = () => {
    if (!weather) return "from-sky-400 via-blue-500 to-indigo-600";
    const condition = weather.weather[0].main;

    switch (condition) {
      case "Clear": return "from-amber-400 via-orange-400 to-yellow-500";
      case "Clouds": return "from-slate-300 via-gray-400 to-slate-500";
      case "Rain":
      case "Drizzle": return "from-blue-700 via-slate-600 to-gray-800";
      case "Thunderstorm": return "from-gray-900 via-purple-900 to-black";
      case "Snow": return "from-blue-50 via-indigo-100 to-white";
      case "Mist":
      case "Haze":
      case "Fog": return "from-zinc-300 via-gray-200 to-slate-400";
      default: return "from-sky-400 via-blue-500 to-indigo-600";
    }
  };

  return (
    <div className={`relative min-h-dvh w-full flex items-center justify-center 
                    p-4 sm:p-8 md:p-12 
                    transition-all duration-1000 ease-in-out bg-linear-to-br ${getGradient()}`}>
      
      {/* Responsive Animated Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Blob: Smaller on mobile, larger on desktop */}
        <div className="absolute -top-10 -left-10 
                        w-48 h-48 sm:w-72 sm:h-72 md:w-[40%] md:h-[40%] 
                        rounded-full bg-white/20 blur-[60px] sm:blur-[120px] 
                        animate-pulse"></div>
        
        {/* Bottom Blob: Hidden on very small screens to keep it clean, shown on sm+ */}
        <div className="hidden sm:block absolute -bottom-10 -right-10 
                        w-72 h-72 md:w-[40%] md:h-[40%] 
                        rounded-full bg-black/10 blur-[100px] md:blur-[150px] 
                        animate-bounce duration-[10s]"></div>
      </div>

      {/* Content Container: Ensuring it scales nicely */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-center">
        {children}
      </div>
    </div>
  );
}

export default DynamicBackground;