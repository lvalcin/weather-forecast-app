import React, {useState} from "react";


const SearchBar = ()=> {

const [city,setCity]= useState("")

  return (
    <div className="container-fluid d-flex justify-content-center">
        <form onSubmit={(e)=>{
          e.preventDefault();
          console.log(city, "HERE IS THE CITY!!!!")
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