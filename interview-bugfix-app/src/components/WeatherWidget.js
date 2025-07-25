import React, { useState, useEffect } from 'react'
import { weatherApi } from '../api/weatherWidgetApi'

const WeatherWidget = ({ city }) => {
  const [weather, setWeather] = useState({ city: '', temperature: 0, maxTemperature: 0 })

  useEffect(() => {
    const loadWeatherData = async () => {
      const weatherData = await weatherApi.getWeather(city)
      setWeather(weatherData)
    }
    loadWeatherData()
  }, [city])

  const isHot = weather.temperature > weather.maxTemperature
  const temperatureDiff = weather.temperature - weather.maxTemperature

  return (
    <div>
      <h2>Weather Widget</h2>
      <p>City: {weather.city}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Max allowed: {weather.maxTemperature}°C</p>
      <p>Difference: {temperatureDiff}°C</p>
      <p>Status: {isHot ? 'Too Hot!' : 'Comfortable'}</p>
    </div>
  )
}

export default WeatherWidget