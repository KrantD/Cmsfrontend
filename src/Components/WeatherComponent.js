import axios from 'axios';
import React, { useState } from 'react';
import './WeatherComponent.css';



function WeatherComponent() {
    const[weather,setweather]= useState([])
    const getweather =()=>{
        axios.get("http://localhost:4094/WeatherForecast").then(
            (response)=>{
                console.log(response);
               setweather(response.data)
            }
        )

    }
    return (
        <div>{
              weather.map(value=>{
                 return(
                <ul>
                      <li>Date={value.date}</li>
                      <li>TempretureC={value.temperatureC}</li>
                      <li>TempretureF={value.temperatureF}</li>
                      <li>Summary={value.summary}</li>
                   </ul>
                 )
             })
          
        }
         <button className='btn btn success' onClick={getweather}> GetWC
             </button>
         </div>
          
       
    );
}

export default WeatherComponent;