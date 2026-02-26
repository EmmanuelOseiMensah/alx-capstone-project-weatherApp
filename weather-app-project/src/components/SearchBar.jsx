function SearchBar({ city, setCity, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={city}
        placeholder="Enter city name..."
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition font-medium active:scale-95"
      >
        Search
      </button>
    </form>
  );
}
export default SearchBar;