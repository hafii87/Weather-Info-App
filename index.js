const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));
// Replace with your actual OpenWeatherMap API key
const API_KEY = '0b4b35f0903c1ac9c381292b88f21277';

app.get('/weather', async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = response.data;

    res.json({
      city: data.name,
      temperature: data.main.temp + ' °C',
      weather: data.weather[0].description,
    });
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch weather data' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});