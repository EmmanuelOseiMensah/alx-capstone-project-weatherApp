import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Weather Dashboard</h1>
      <SearchBar />
      <WeatherCard />
    </div>
  );
}

export default App;
