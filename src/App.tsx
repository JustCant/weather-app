import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import './App.css'
import { useEffect, useState } from 'react';
import Forecast from './components/Forecast/Forecast';

export interface ICurrentWeather {
  weather: string;
  location: string;
  temperature: string;
  icon: string
}

export interface IHour {
  condition: {
    icon: string;
    text: string;
  };
  temp_f: number;
  time: string;
}

function App() {
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState<ICurrentWeather>({
    weather: '',
    location: '',
    temperature: '',
    icon: ''
  });
  const [forecast, setForecast] = useState<IHour[]>([]);

  useEffect(() => {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=61e2b05bf1a2415597d131104250204&q=15106&days=1&aqi=no&alerts=no')
      .then(res => res.json())
      .then(data => {
        const currentWeather = {
          weather: data.current.condition.text,
          location: `${data.location.name}, ${data.location.region}`,
          temperature: data.current.temp_f,
          icon: data.current.condition.icon
        };

        const forecast = data.forecast.forecastday[0].hour;

        console.log(forecast)

        setCurrentWeatherInfo(currentWeather);
        setForecast(forecast);
      });
  }, []);  

  return (
    <>
      <div className="app">
        <CurrentWeather currentWeather={currentWeatherInfo}/>       
        <Forecast forecast={forecast}/>
      </div>
    </>
  )
}

export default App
