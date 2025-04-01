import { useState } from "react";
import './CurrentWeather.css';
import { ICurrentWeather } from "../../App";

type BackgroundTypes = 'sunny-background' | 'cloudy-background' | 'partly-cloudy-background' | 'raining-background' | 'snowing-background';

const CurrentWeather = ({ weather, location, temperature }: ICurrentWeather) => {
    const [background, setBackGround] = useState<BackgroundTypes>('sunny-background');

    switch(weather) {
        case 'sunny':
            if (background !== 'sunny-background') {
                setBackGround('sunny-background');
            }
            break;
        case 'cloudy':
            if (background !== 'cloudy-background') {
                setBackGround('cloudy-background');
            }
            break;
        case 'partly cloudy':
            if (background !== 'partly-cloudy-background') {
                setBackGround('partly-cloudy-background');
            }
            break;
        case 'raining':
            if (background !== 'raining-background') {
                setBackGround('raining-background');
            }
            break;
        case 'snowing':
            if (background !== 'snowing-background') {
                setBackGround('snowing-background');
            }
            break;
        default:
            break;
    }

    return (
        <>
            <div className={'weather-container background ' + background}>
                <div>{weather}</div>
                <div>{location}</div>
                <div>{temperature}°</div>
            </div>
        </>
    );
}

export default CurrentWeather;