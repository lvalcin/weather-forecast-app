import React, {useState} from "react";

const WeatherCard = ({data}) =>{
    if (!data || !data.city){
        return <div>No weather data to display.</div>;
      }

    const tempInKelvin = data.list[0].main.temprature;
    const tempInFahrenheit = ((tempInKelvin - 273.15) * 9/5 + 32).toFixed(1); //converst temp from Kelvin to Fahrenheit

    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div className="card-body">
                <h1 className="fw-bold card-title">{data.city.name}</h1>
                <p className="card-text">Temperature: {tempInFahrenheit}°F</p>
                <p className="card-text">Description: {data.list[0].weather[0].description} </p>
                <p className="cad-text">Summary:{data.list[0].summery} </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>

        </div>
    )
}

export default WeatherCard;



