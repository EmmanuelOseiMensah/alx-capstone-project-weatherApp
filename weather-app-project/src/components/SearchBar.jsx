function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={city}
        placeholder ="Enter city name here ..."
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2
        focus:ring-blue-400"
      />
      <button
        onClick={onSearch}
        className="px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-600
        transition font-medium"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
