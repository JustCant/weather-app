import { IHour } from "../../App";
import './Forecast.css';

interface IForecsastProps {
    forecast: IHour[];
}

const Forecast = ({forecast}: IForecsastProps) => {
    const hours = forecast.map(hour => {
        const formattedHour = {
            time: new Date(hour.time).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
            temp: `${hour.temp_f}°`
        }
        return (
            <>
                <span className="hour">
                    <div>{formattedHour.temp}</div>
                    <img src={hour.condition.icon}></img>
                    <div className="time">{formattedHour.time}</div>
                </span>
            </>
        )
    })

    return (
        <>
            <div style={{ marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
                <span style={{ marginLeft: '5px' }}></span>Hourly Forecast
            </div>
            <div className="hours-grid">
                {hours}
            </div>
        </>
    )
}

export default Forecast;