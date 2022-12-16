import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import City from './City';

function App() {
  const key = '122b990e398595bce8f25d0f3848ee16';
  const [searchParams, setSearchParams] = useState('');
  const [weatherDetails, setWeatherDetails] = useState();

  function search() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchParams}&appid=${key}&units=metric`
      )
      .then((res) => setWeatherDetails(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <div>
        
       <div className="mb-3 pt-0">
  <input type="text"
  onChange={(event) => setSearchParams(event.target.value)}
   placeholder="Placeholder" 
   className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-100%"/>
</div>

        
        <button onClick={() => search()}
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        Search
      </button>
        <City weatherDetails={weatherDetails} />
      </div>
    </div>
    
  );
}

export default App;