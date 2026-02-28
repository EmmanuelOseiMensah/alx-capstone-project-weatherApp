// hooks/useWeather.js
import { useEffect, useState, useCallback } from "react";

const REFRESH_INTERVAL = 2 * 60 * 1000; // reverse to 5 minutes after illustration

export default function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchData = useCallback(async (signal) => {
    if (!city || !API_KEY) return;

    try {
      setLoading(true);
      
      // Fetch both Current and Forecast simultaneously using Promise.all
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`, { signal }),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`, { signal })
      ]);

      if (!weatherRes.ok || !forecastRes.ok) throw new Error("Location not found or data unavailable");

      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();

      // Filter Forecast logic
      const uniqueDays = [];
      const seenDates = new Set();
      forecastData.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!seenDates.has(date) && uniqueDays.length < 5) {
          seenDates.add(date);
          uniqueDays.push(item);
        }
      });

      setWeather(weatherData);
      setForecast(uniqueDays);
      setError(null);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
        setWeather(null);
        setForecast([]);
      }
    } finally {
      setLoading(false);
    }
  }, [city, API_KEY]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    const interval = setInterval(() => fetchData(controller.signal), REFRESH_INTERVAL);

    return () => {
      controller.abort();
      clearInterval(interval);
    };
  }, [fetchData]);

  return { weather, forecast, loading, error };
}