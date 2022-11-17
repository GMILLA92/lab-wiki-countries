import logo from './logo.svg';
import './App.css';
import {Routes, Route, Router} from "react-router-dom"
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails'
import CountriesList from './components/CountriesList'
// import countriesData from './countries.json'
import axios from "axios"
import { useEffect } from 'react';
import React, { useState} from "react"
import { Link } from "react-router-dom";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {
  const [countriesData, setCountry] = useState([])

  useEffect(() => {
    const apiCAll = async () => {
       const res = await axios.get(apiURL)
      
       setCountry(res.data)
    }
    apiCAll()
  }, [])

  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route path="/listCountries/:alpha3Code" element={<CountryDetails countries={countriesData} />} />
        <Route path="/listCountries" element={<CountriesList countries={countriesData} />} />
    </Routes>
    </div>
  );
}

export default App;
