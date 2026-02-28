import { Search } from "lucide-react"; // npm install lucid-react for icons

function SearchBar({ city, setCity, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return; // Logic check: don't search empty strings
    onSearch();
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-row gap-2 w-full max-w-2xl mx-auto group"
    >
      <div className="relative flex-1">
        <input
          type="text"
          value={city}
          placeholder="Search city..."
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-3 sm:py-2.5 border-none bg-white/90 backdrop-blur-md 
                     rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-400 
                     transition-all outline-none text-gray-800 placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        className="px-4 sm:px-6 py-3 sm:py-2.5 bg-blue-600 hover:bg-blue-700 
                   text-white rounded-2xl font-semibold shadow-lg shadow-blue-200 
                   transition-all active:scale-95 flex items-center justify-center 
                   min-w-2.5 sm:min-w-40"
      >
        {/* Mobile: Show only Icon | Desktop: Show Text */}
        <Search className="w-5 h-5 sm:hidden" />
        <span className="hidden sm:inline">Get 5-day forecast</span>
      </button>
    </form>
  );
}

export default SearchBar;