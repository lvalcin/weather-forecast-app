import React, {useState} from "react";
import WeatherCard from "./WeatherCard";
import FiveDayForecast from "./FiveDayForecast";
import { ThreeHourForecast } from "../assets/Data/data/ThreeHourForecast";
import { FiveDays } from "../assets/Data/data/FiveDays";
import CurrentWeather from "./CurrentWeather";



const SearchBar = ()=> {

const [city,setCity]= useState("")
const [weather, setWeather] = useState(null)
const [fiveDay, setFiveDay] = useState(null)
const [currentWeather, setCurrentWeather] = useState(null)
const apiKey = process.env.REACT_APP_WEATHER_API_KEY
// const apiUrl = process.env.REACT_APP_WEATHER_API_URL


const getCurrentWeather=()=>{
  if (!city) return;
  const weatherUrl = `https://weather-api167.p.rapidapi.com/api/weather/current?place=${encodeURIComponent(city)}&mode=json&lang=en`
  
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
         throw new Error("Failed to fetch current weather");
      } else {
      return response.json()
      }
    })
    .then((data)=>{
      console.log(data, "RIGHT NOW WEATHER !!!!")
      setCurrentWeather(data)
    });

}


const getWeather=()=>{
  if (!city) return;
  const weatherUrl = `https://weather-api167.p.rapidapi.com/api/weather/forecast?place=${encodeURIComponent(city)}&cnt=8&units=standard&type=three_hour&mode=json&lang=en`
  
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
        return ThreeHourForecast ;
      } else {
      return response.json()
      }
    })
    .then((data)=>{
      console.log(data, "3 HOUR FETCH DATA !!!!")
      setWeather(data)
    });
}


const fetchFiveDayForecast = ()=>{ 
    if (!city) return;
  const weatherUrl = `https://weather-api167.p.rapidapi.com/api/weather/forecast?place=${encodeURIComponent(city)}&cnt=30&units=standard&&mode=json&lang=en`
  
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
        return FiveDays;
      } else {
      return response.json()
      }
    })
    .then((data)=>{
      console.log(data, "5 DAY FETCH DATA !!!!")
      setFiveDay(data)
    })
  }




  return (
    <div className="container-fluid justify-content-center">
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          console.log(city, "HERE IS THE CITY!!!!")
          getWeather();
          fetchFiveDayForecast ();
          getCurrentWeather();
          
        }}>
            <input className="form-control mb-3"
            type="text" 
            placeholder="Enter city name" 
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            style={{ borderWidth: "5px" }} 
             />
            <button className="btn btn-light"type="submit"
            //  style={{ borderRadius: "25px" }}
             >
              <strong>SUBMIT</strong>
            </button>
            <span className="list"></span>
        </form>
      </div>

        {/* bellow div displays the current weather */}
      <div className="mt-5">
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      </div>


      {/* below div displays current weather card for the next 18 hours */}
      <div className="mt-5"> 
        {weather && <WeatherCard data={weather}/>}
      </div>

      {/* below div displays 5 day forecast */}
      <div> 
        {fiveDay && <FiveDayForecast data={fiveDay}/>}
      </div>
    </div>
  );
}

export default SearchBar