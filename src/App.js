import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import City from './City';

function App() {
  const key ="122b990e398595bce8f25d0f3848ee16";
  const[search,setSearch]=useState('');
  
  const[city,setCity]=useState();
  useEffect(()=>{
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[])

    console.log(search);
  return (
    <div className="App">
      <div>
      
  <input type="text" onChange={(event)=>setSearch(event.target.value)} 
   placeholder="Placeholder" 
   className="px-3 py-4 w-{250px} placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-25"/>
  <City city={city}/>
  </div>
</div>
  
  );
  }

export default App;
