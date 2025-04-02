import { IHour } from "../../App";

interface IForecsastProps {
    forecast: IHour[];
}

const Forecast = ({forecast}: IForecsastProps) => {
    const hours = forecast.map(hour => {
        const formattedHour = {
            time: new Date(hour.time).toLocaleTimeString(),
            temp: `${hour.temp_f}°`
        }
        return (
            <>
                <div>{formattedHour.time}</div>
                <div>{formattedHour.temp}</div>
                <div>
                    <img src={hour.condition.icon}></img>
                    {hour.condition.text}
                </div>
                <hr/>
            </>
        )
    })

    return (
        <>
            {hours}
        </>
    )
}

export default Forecast;