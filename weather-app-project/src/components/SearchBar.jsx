function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="flex gap-2">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="px-4 py-2 rounded-lg text-black w-64"
      />
      <button
        onClick={onSearch}
        className="bg-blue-500 px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
