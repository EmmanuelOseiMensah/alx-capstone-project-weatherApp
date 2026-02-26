import { useEffect, useState, useCallback } from "react";

const REFRESH_INTERVAL = 2 * 60 * 1000; // Increase to 5  mins later (standard for weather)

export default function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = useCallback(async (signal) => {
    if (!city) return;
    if (!API_KEY) {
      setError("API Key missing from environment variables.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        { signal } // Pass the signal here
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch");

      setWeather(data);
      setError(null);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
        setWeather(null);
      }
    } finally {
      setLoading(false);
    }
  }, [city, API_KEY]);

  useEffect(() => {
    const controller = new AbortController();
    
    fetchWeather(controller.signal);

    const interval = setInterval(() => fetchWeather(controller.signal), REFRESH_INTERVAL);

    return () => {
      controller.abort(); // Cancel request if component unmounts
      clearInterval(interval);
    };
  }, [fetchWeather]);

  return { weather, loading, error, refresh: () => fetchWeather() };
}