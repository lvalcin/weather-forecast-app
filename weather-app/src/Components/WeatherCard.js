import React, {useState} from "react";

const WeatherCard = ({data}) =>{
    const [weatherDetails, setWeatherDetails]= useState(false);
    if (!data || !data.city){
        return <div>No weather data to display.</div>;
      }
      return(
         <div className="d-flex overflow-auto gap-3 py-3">
            {/* .slice(0,6) limits the forecast to the next upcoming 6 data list and then maps through them with .map*/}
     {data.list.slice(0,6).map((forecast,index)=>{
    const tempInKelvin = forecast.main.temprature;
    const tempInFahrenheit = ((tempInKelvin - 273.15) * 9/5 + 32).toFixed(1); //converst temp from Kelvin to Fahrenheit
    const feelsLike = ((forecast.main.temprature_feels_like - 273.15) * 9 / 5 + 32).toFixed(1);
    const maxTemp =((forecast.main.temprature_max- 273.15) * 9 / 5 + 32).toFixed(1);
    const minTemp = ((forecast.main.temprature_min- 273.15) * 9 / 5 + 32).toFixed(1);
    const humidity = forecast.main.humidity
    const precipitation = forecast.probability_of_precipitation;
    const wind = forecast.wind;
    const weatherIcon = forecast.weather[0].icon;
    // const weatherIconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
        console.log(weatherIcon, "WEATHER!!!!!");
    const weatherDate = new Date(forecast.dt_txt); //converts date string from API data to a JS data object
        console.log(weatherDate, "WEATHER DATE!!!!");
    const date = weatherDate.toLocaleDateString("en-US", 
        {weekday: "long",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true})
        // Using toLocaleString here because it formats both date and time parts.
        // toLocaleDateString only formats the date (year, month, day, weekday) but ignores time (hour, minute).
        // So to show weekday, date, and time (hour and minute), toLocaleString is needed.
        // The options specify the format details like full weekday name, short month, numeric day/year, and 12-hour clock with minutes for AM/PM.
        // "en-US" formats the date/time in US English style 

    const weatherSummary= `${data.city.name} conditions:
                        ${data.list[0].weather[0].description} 
                        with a temperature of ${tempInFahrenheit}°F, 
                        but it feels like ${feelsLike}°F. 
                        The maximum temperature today is ${maxTemp}°F, 
                        and the minimum temperature is ${minTemp}°F. 
                        The humidity level is at ${humidity}%, 
                        with a wind speed of ${wind.speed} m/s. 
                        There is a ${precipitation}% chance of precipitation.`;
    return(
        <div>
            <div className="card my-4 shadow-sm" style={{width: "18rem"}}>
            <div className="card-body">
                <h6> {date}  </h6>
                <h1 className="fw-bold display-4 card-title">{data.city.name}</h1>
                {weatherIcon && (
                    <img src={weatherIcon} alt="weather icon" style={{width:"80px"}}/>
                )}
            
                <h2 className="card-text fs-1">{tempInFahrenheit}°F</h2>
                <p className="card-text text-capitalize fs-5 mb-0">{data.list[0].weather[0].description} </p>
                <p> <span className="me-5">H:{maxTemp}°F</span> 
                    <span> L: {minTemp}°F </span>
                </p>
                { weatherDetails && (
                    <p className="card-text text-muted">{weatherSummary} </p>
                    )}
                <button className="btn btn-primary"
                onClick={()=>setWeatherDetails(!weatherDetails)
                }>
                    { weatherDetails ? "Hide Details" : "More Details"}
                </button>
            </div>
            </div>
        </div>
    )
})} 
</div>
)
}

export default WeatherCard;



