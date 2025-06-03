import React from "react";
import SearchBar from "./Components/SearchBar";

const App = ()=> {
  return (
    <div className="App">
      <h1>🌤️ My Weather App</h1>
      <p>Search for a city to get the weather forecast!</p>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

