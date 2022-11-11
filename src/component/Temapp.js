import React from 'react'
import { useState } from 'react';

import './style.css';

import { useNavigate } from 'react-router-dom';


const Temapp = () => {

const [inputCity, setInputCity] = useState("")
  
  const navigate = useNavigate();



const handleChangeInput = (e) => {
  console.log("value", e.target.value)
  setInputCity(e.target.value)
}

const handleSearch = () => {
  navigate('/search', { state: { city: inputCity } });
 
}


return (
  <div className="col-md-12">
    <div className="wetherBg">
    {/* <img src="https://i.pinimg.com/564x/b4/9a/de/b49ade0c9859ec26eb7e9192ef4fdea8.jpg" className='background' alt="" srcset="" /> */}
      <h1 className="heading">Temperature App</h1>

      <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control"
          value={inputCity}
          onChange={handleChangeInput} />
        <button className="btn btn-dark" type="button"
          onClick={handleSearch}
        >Search</button>
      </div>
    </div>

    

  </div>
);
}

export default Temapp