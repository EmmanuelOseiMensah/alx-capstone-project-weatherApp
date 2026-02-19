# 🌦️ Weather Dashboard – FE Capstone Project

A modern, responsive Weather Dashboard built with **React JS** and **Tailwind CSS**. This application allows users to search for real-time weather data across global cities, featuring automatic updates and a seamless user interface.

## 🚀 Live Demo

**[Insert Netlify/Vercel App Link Here Later After Completing the Project ]**

----------------------------------------------------------

## 📖 Project Overview

This project simulates a real-world frontend development environment. The goal was to build an interactive dashboard that effectively handles asynchronous API data, manages complex UI states, and provides a mobile-first user experience.

### Key Features

* **Real-Time Data:** Fetches current temperature, humidity, and wind speed using the OpenWeatherMap API.
* **Dynamic Search:** Search by city name with instant UI updates and error handling for invalid entries.
* **Auto-Refresh:** Logic implemented to automatically poll the API every few minutes to ensure data accuracy.
* **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop views using Tailwind CSS.
* **Weather Visuals:** Dynamic weather icons that change based on current conditions (Sunny, Cloudy, Rainy, etc.).

--------------------------------------------------------

## 🛠️ Technical Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Data Fetching:** Axios / Fetch API
* **Deployment:** Netlify / Vercel

------------------------------------------------------

## 🏗️ Architecture & Logic

The application is built using a modular component-based architecture:

* **`SearchBar.jsx`**: Handles user input and submission logic.
* **`WeatherCard.jsx`**: A reusable component for displaying primary weather metrics.
* **`ErrorMessage.jsx`**: Gracefully handles 404s (city not found) and network errors.

### Data Flow

1. User enters a city name → `SearchBar` updates local state.
2. On Submit → `useEffect` or a handler function triggers an asynchronous GET request.
3. API Response → Data is parsed and stored in the main `weather` state.
4. UI Update → Conditional rendering displays the data or an error message if the request fails.

----------------------------------------------------

## ⚙️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/EmmanuelOseiMensah/alx-capstone-project-weatherApp

```


2. **Install dependencies:**
```bash
npm install

```


3. **Set up Environment Variables:**
Create a `.env` file in the root directory and add your API key:
```env
VITE_WEATHER_API_KEY=later_enter_openweathermap_api_here

```


4. **Run the development server:**
```bash
npm run dev

```



---

## 🌟 Roadmap & Stretch Goals

* [ ] **Local Storage:** Save recent searches to allow users to quickly toggle between cities.
* [ ] **7-Day Forecast:** Extend API calls to include daily high/low projections.
* [ ] **Geolocation:** Auto-detect user location on initial load.
* [ ] **Dark Mode:** Implement a theme toggle using Tailwind's dark mode features.

-----------------------------------------------------------------------

## 📝 Author and Challenge

**Author:** Emmanuel Osei-Mensah

**Challenge:** My ALX Front-End Capstone Project

---
