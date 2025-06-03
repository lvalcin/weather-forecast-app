import React from "react";
import SearchBar from "./Components/SearchBar";


const App = ()=> {
  return (
    <div className="container-fluid text-center">
      <h1 className="mt-5 display-2">🌤️ My Weather App</h1>
      <p>Search for a city to get the weather forecast!</p>
      <div>
        <SearchBar />
      </div>
      
    </div>
  );
}

export default App;

