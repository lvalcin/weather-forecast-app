import React, {useState} from "react";

const WeatherCard = ({data}) =>{
      if (!data || !data.city){
        return <div>No weather data to display.</div>;
      }
    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div className="card-body">
                <h5 className="card-title">{data.city.name}</h5>
                <p className="card-text">Temperature: {data.list[0].main.temprature}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>

        </div>
    )
}

export default WeatherCard;



