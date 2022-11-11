import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios"
import './style.css';

const Search = () => {
    const apiKey = "f0a457bc56a16ee00c539f87851fd925"
    const [data, setData] = useState({})

    const {state} = useLocation();
    const { city } = state;

    useEffect(()=> {
        
        if (!city) return
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey
        axios.get(apiURL).then((res) => {
          console.log("response", res.data)
          setData(res.data)
        }).catch((err) => {
          console.log("err", err)
        })
    }, [city] )

  return (
    <div className="col-md-12">
        
        {Object.keys(data).length > 0 &&
      <div className="col-md-12 text-center mt-5">

        <div className="shadow rounded wetherResultBox">
          <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" className='img' alt="" srcset="" />

          <h5 className="weathorCity">
            {data?.name}
          </h5>
          <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          <h6 className='"humidity'>{(data?.main?.humidity)}%=Humidity</h6>
        </div>
      </div>
    }
    </div>
  )
}

export default Search