import React from "react";

const SearchBar = ()=> {
  return (
    <div>
        <form className="text-center">
            <input type="text" placeholder="Search for a city" />
            <button type="submit">SUBMIT</button>
            <span className="list"></span>
        </form>
    </div>
  );
}

export default SearchBar