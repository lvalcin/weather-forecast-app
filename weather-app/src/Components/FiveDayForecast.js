import React, {useState} from "react";

// const date converts the timestamp (in seconds) to a JavaScript Date (in milliseconds) why *1000 is being used
// Then format it into a short, readable string like "Tue, Jun 3"
// - "en-US" sets the format to U.S. English style
// - weekday: "short" gives "Mon", "Tue", etc.
// - month: "short" gives "Jan", "Feb", etc.
// - day: "numeric" gives the date number like 1, 2, 3...

const FiveDayForecast = ({data})=>{
    console.log(data, "Five day forecast datat!")
    if(!data ||!data.list){
        return <div>No daily forecast available </div>
    }

    //the logic below: groups the forecast data by date 
    const forecast ={};
    data.list.forEach((forecastItem)=>{
        const date = forecastItem.dt_txt.split(" ")[0];
        if (!forecast[date]){
            forecast[date]=[];
        }
        forecast[date].push(forecastItem);
    })

    //logic below : for each day, the hour closest to 12:00 is chosen
    const dailyWeather = Object.values(forecast).map((day)=>{
        return day.reduce((current, closest)=>{
            const targetHour = 12;
            const currentHour = new Date(current.dt_txt).getHours();
            const closestHour = new Date(closest.dt_txt).getHours();
            return Math.abs(currentHour - targetHour) <
            Math.abs(closestHour - targetHour)
            ? current : closest;
        });
    })
    .slice(0,5); // gets only the next 5 days of forecasts

    return(
        <div className ="d-flex overflow-auto py-3">
            {dailyWeather.map((day,index)=>{
        const dateString = new Date(day.dt_txt).toLocaleDateString("en-US",{
            weekday: "short",
            month: "short",
            day: "numeric",
        })
        const weatherIcon = day.weather?.[0]?.icon;
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        const maxTemp =((day.main.temprature_max- 273.15) * 9 / 5 + 32).toFixed(1);
        const minTemp = ((day.main.temprature_min- 273.15) * 9 / 5 + 32).toFixed(1);
    
        return(
            <div key={index} className="card flex-shrink-0 mx-2"
                style={{width: '12rem'}}>
                <div className="card-body text-center">
                <h6> {dateString}   </h6>
                <img src ={weatherIconUrl} alt="weather icon" 
                onError={(e)=>{
                    e.target.src= weatherIcon}}
                    />
                <p>H:{maxTemp} </p>
                <p>L:{minTemp} </p>

            </div>  
        </div>
        )
            })
            }     
        </div>
    )
}

export default FiveDayForecast;