import React, {useState} from "react";


const CurrentWeather= ({data})=>{
    const [weatherDetails, setWeatherDetails]= useState(false);
        if (!data || !data.main || !data.weather){
            return <div>No weather data to display.</div>;
          }
    const tempInKelvin = data.main.temprature;
    const tempInFahrenheit = ((tempInKelvin - 273.15) * 9/5 + 32).toFixed(1); //converst temp from Kelvin to Fahrenheit
    const feelsLike = ((data.main.temprature_feels_like - 273.15) * 9 / 5 + 32).toFixed(1);
    const maxTemp =((data.main.temprature_max- 273.15) * 9 / 5 + 32).toFixed(1);
    const minTemp = ((data.main.temprature_min- 273.15) * 9 / 5 + 32).toFixed(1);
    const humidity = data.main.humidity
    const precipitation = data.probability_of_precipitation;
    const wind = data.wind;
    const weatherIcon = data.weather?.[0]?.icon;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        console.log(weatherIcon, "WEATHER!!!!!");
    const weatherDate = new Date(data.dt_txt); 
    const date = weatherDate.toLocaleDateString("en-US", 
        {weekday: "long",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true})
    const weatherSummary= `${data.name} conditions:
                        ${data.weather[0].description} 
                        with a temperature of ${tempInFahrenheit}°F, 
                        but it feels like ${feelsLike}°F. 
                        The maximum temperature today is ${maxTemp}°F, 
                        and the minimum temperature is ${minTemp}°F. 
                        The humidity level is at ${humidity}%, 
                        with a wind speed of ${wind.speed} m/s. 
                        There is a ${precipitation}% chance of precipitation.`
    return(
        <div className="container-fluid d-flex">
        <div className="card my-4 shadow-sm" 
                style={{width: "18rem", minHeight: "15rem", flexShrink: 0 
                }}>
            <div className="card-body  d-flex flex-column justify-content-between"
                style={{ overflowY: "auto" }}>
                <h6> {date}  </h6>
                <h1 className="fw-bold text-center">{data.name}</h1>
                {/* {weatherIcon && ( */}
                    <img src={weatherIconUrl} alt="weather icon" 
                    onError={(e)=>{
                    e.target.src= weatherIcon}}
                    />
                {/* )} */}
            
                <h2 className="text-center fs-1">{tempInFahrenheit}°F</h2>
                <p className="text-capitalize fs-5 mb-2">{data.weather[0].description} </p>
                <p> <span className="me-5">H:{maxTemp}°F</span> 
                    <span> L: {minTemp}°F </span>
                </p>
                { weatherDetails && (
                    <p className="text-muted small">{weatherSummary} </p>
                    )}
                <button className="btn btn-light border-primary"
                onClick={()=>setWeatherDetails(!weatherDetails)
                }>
                    { weatherDetails ? "Hide Details" : "More Details"}
                </button>
            </div>
        </div>
        </div>
    )
}

export default CurrentWeather