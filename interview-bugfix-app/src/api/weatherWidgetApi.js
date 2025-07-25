const API_BASE_URL = 'http://localhost:3001';

export const weatherApi = {
  // GET /api/weather/:city
  getWeather: async (city) => {
    const response = await fetch(`${API_BASE_URL}/api/weather/${city}`);
    if (!response.ok) throw new Error('Weather API failed');
    return await response.json();
  }
};