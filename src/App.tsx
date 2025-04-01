import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import './App.css'
import { useState } from 'react';

type WeatherTypes = 'sunny' | 'cloudy' | 'partly cloudy' | 'raining' | 'snowing';

export interface ICurrentWeather {
  weather: WeatherTypes;
  location: string;
  temperature: string;
}

function App() {
  const [weather] = useState<WeatherTypes>('sunny');
  const [location] = useState('Carnegie, PA');
  const [temperature] = useState('70');

  return (
    <>
      <div className="app">
        <CurrentWeather weather={weather} location={location} temperature={temperature}/>
      </div>
    </>
  )
}

export default App
