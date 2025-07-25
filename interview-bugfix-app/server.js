const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Weather API endpoint
app.get('/api/weather/:city', async (req, res) => {
  const { city } = req.params;
  
  // Simulate API processing delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const weatherData = {
    city,
    temperature: Math.floor(Math.random() * 30) + 10,
    condition: ['Sunny', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)],
    humidity: Math.floor(Math.random() * 100),
    windSpeed: Math.floor(Math.random() * 20) + 5,
    maxTemperature: "25°C"
  };
  
  res.json(weatherData);
});

// User Profile API endpoint
app.get('/api/user-profile', async (req, res) => {
  // Simulate API processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const userData = {
    name: 'John Doe',
    discountRate: 15,
    membershipLevel: 'Premium'
  };
  
  res.json(userData);
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
  console.log(`📡 Endpoints:`);
  console.log(`   GET /api/weather/:city`);
  console.log(`   GET /api/user-profile`);
});