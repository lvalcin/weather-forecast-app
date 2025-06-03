import React, {useState} from "react";

const WeatherCard = ({data}) =>{
    const [weatherDetails, setWeatherDetails]= useState(false);
    if (!data || !data.city){
        return <div>No weather data to display.</div>;
      }
    const tempInKelvin = data.list[0].main.temprature;
    const tempInFahrenheit = ((tempInKelvin - 273.15) * 9/5 + 32).toFixed(1); //converst temp from Kelvin to Fahrenheit
    const feelsLike = ((data.list[0].main.temprature_feels_like - 273.15) * 9 / 5 + 32).toFixed(1);
    const maxTemp =((data.list[0].main.temprature_max- 273.15) * 9 / 5 + 32).toFixed(1);
    const minTemp = ((data.list[0].main.temprature_min- 273.15) * 9 / 5 + 32).toFixed(1);
    const humidity = data.list[0].main.humidity
    const precipitation = data.list[0].probability_of_precipitation;
    const wind = data.list[0].wind;
    const weatherSummary= `The weather in ${data.city.name} 
                        is currently ${data.list[0].weather[0].description} 
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
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div className="card-body">
                <h1 className="fw-bold display-4 card-title">{data.city.name}</h1>
                <h2 className="card-text fs-1">{tempInFahrenheit}°F</h2>
                <p className="card-text text-capitalize fs-5">{data.list[0].weather[0].description} </p>
                { weatherDetails && (
                    <p className="card-text text-muted">Summary:{weatherSummary} </p>
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
}

export default WeatherCard;



