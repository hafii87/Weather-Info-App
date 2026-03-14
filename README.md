# Weather Info App

A simple web application that lets users check real-time weather information for any city using the OpenWeatherMap API.

---

## 📋 Short Description

A lightweight Node.js/Express web app with a clean frontend interface. Users enter a city name and instantly see the current temperature and weather conditions fetched from the OpenWeatherMap API.

---

## ✨ Features

- Search weather by city name
- Displays city name, temperature (°C), and weather description
- Clean, responsive UI with a background image
- RESTful backend API endpoint (`/weather`)

---

## 🛠 Technologies Used

| Layer    | Technology              |
|----------|-------------------------|
| Backend  | Node.js, Express 5      |
| HTTP     | Axios                   |
| Frontend | HTML, CSS, Vanilla JS   |
| API      | OpenWeatherMap API      |

---

## ⚙️ Installation / Setup

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd weather-info-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set your API key**  
   Open `index.js` and replace the value of `API_KEY` with your [OpenWeatherMap API key](https://openweathermap.org/api):
   ```js
   const API_KEY = 'your_api_key_here';
   ```

---

## ▶️ How to Run

```bash
node index.js
```

Then open your browser and navigate to:
```
http://localhost:3000
```

---

## 📁 Project Structure

```
weather-info-app/
├── public/
│   ├── index.html      # Frontend UI
│   ├── style.css       # Styling
│   └── images.jpg      # Background image
├── index.js            # Express server & weather API route
├── package.json
└── .gitignore
```
