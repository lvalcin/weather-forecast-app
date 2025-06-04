import React, {useState} from "react";
import WeatherCard from "./WeatherCard";
import FiveDayForecast from "./FiveDayForecast";
import { ThreeHourForecast } from "../assets/Data/ThreeHourForecast";
import { FiveDays } from "../assets/Data/FiveDays";



const SearchBar = ()=> {

const [city,setCity]= useState("")
const [weather, setWeather] = useState(null)
const apiKey = process.env.REACT_APP_WEATHER_API_KEY
// const apiUrl = process.env.REACT_APP_WEATHER_API_URL


const getWeather=()=>{
  if (!city) return;
  const weatherUrl = `https://weather-api167.p.rapidapi.com/api/weather/forecast?place=${encodeURIComponent(city)}&cnt=20&units=standard&type=three_hour&mode=json&lang=en`
  
  fetch(weatherUrl, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "x-rapidapi-host": "weather-api167.p.rapidapi.com",
      "x-rapidapi-key": apiKey 
    }
  })
    .then((response)=>{
      if (!response.ok){
        return ({ThreeHourForecast } || {FiveDays });
      } else {
      return response.json()
      }
    })
    .then((data)=>{
      console.log(data, "HERE IS THE DATA !!!!")
      setWeather(data)
    })
}



  return (
    <div className="container-fluid justify-content-center">
      <div>
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
            <button className="btn btn-primary"type="submit"
            //  style={{ borderRadius: "25px" }}
             >
              SUBMIT
            </button>
            <span className="list"></span>
        </form>
      </div>

      {/* below div displays current weather card for the next 18 hours */}
      <div className="mt-5"> 
        {weather && <WeatherCard data={weather}/>}
      </div>

      {/* below div displays 5 day forecast */}
      <div> 
        {weather && <FiveDayForecast data={weather}/>}
      </div>
    </div>
  );
}

export default SearchBar