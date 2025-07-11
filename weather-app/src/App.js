import React from "react";
import SearchBar from "./Components/SearchBar";
import './App.css';


const App = ()=> {
  return (
    <div className="container-fluid text-center bg-primary text-light min-vh-100 p-4">
      <h1 className="mt-5 display-2">🌤️ My Weather App</h1>
      <p>Search for a city to get the weather forecast!</p>
      <div>
        <SearchBar />
      </div>
      
    </div>
  );
}

export default App;

