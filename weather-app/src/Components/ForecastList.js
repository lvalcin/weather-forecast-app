import React, {useState} from "react";



const ForecastList = ({weather})=>{
    return(
        <div>     
            {/* //.slice(0,6) limits the forecast to 6 items */}
           { weather.list.slice(0,6).map((forecast, index)=>(
                <WeatherCard 
                key={index} 
                data ={forecast} 
                city={weather.city.name}
                />
            ))}
        </div>
    )
}

export default ForecastList