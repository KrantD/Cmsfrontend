import axios from 'axios';
import React, { useState } from 'react';
import './WeatherComponent.css';



function WeatherComponent(props) {
    const[weather,setweather]= useState("")
    const getweather =()=>{
        axios.get("http://localhost:4094/WeatherForecast").then(
            (response)=>{
                console.log(response);
               // setweather(response.data)
            }
        )

    }
  
    return (
        <div>{
            //<p>{weather}</p>
            // weather.map(item=>{
                <button className='btn- btn success' onClick={getweather}>Fetch WC</button>
               
            // }
            // )
        }
         </div>
       
    );
}

export default WeatherComponent;