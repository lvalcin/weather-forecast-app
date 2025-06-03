import React, {useState} from "react";


const SearchBar = ()=> {

const [city,setCity]= useState("")
const apiKey = process.env.REACT_APP_WEATHER_API_KEY
// const apiUrl = process.env.REACT_APP_WEATHER_API_URL


const getWeather=()=>{
  const weatherUrl = `https://weather-api167.p.rapidapi.com/api/weather/forecast?place=${encodeURIComponent(city)}&cnt=3&units=standard&type=three_hour&mode=json&lang=en`
  
  fetch(weatherUrl, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "x-rapidapi-host": "weather-api167.p.rapidapi.com",
      "x-rapidapi-key": apiKey 
    }
  })
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      console.log(data, "HERE IS THE DATA !!!!")
    })
}



  return (
    <div className="container-fluid d-flex justify-content-center">
        <form onSubmit={(e)=>{
          e.preventDefault();
          console.log(city, "HERE IS THE CITY!!!!")
          getWeather();
        }}>
            <input className="form-control mb-3"
            type="text" 
            placeholder="Enter city name" 
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            style={{ borderWidth: "5px" }} 
             />
            <button className="btn btn-primary btn-primary"type="submit"
            //  style={{ borderRadius: "25px" }}
             >
              SUBMIT
            </button>
            <span className="list"></span>

        </form>
    </div>
  );
}

export default SearchBar