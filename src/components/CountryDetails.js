import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

function CountryDetails() {
    // const countries = props.countries
    const { alpha3Code } = useParams()
    // const selectedCountry = countries.find((country)=> {
    //     return country.alpha3Code === alpha3Code
    // })
    const [country, setCountry] = useState([])

    const apiURL = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
  
    useEffect(() => {
        const apiCAll = async () => {
            const response = await axios.get(apiURL)
            setCountry(response.data)
        }
        apiCAll()
    }, [])

    return (
        <div>
            <h1>Details</h1>
            <h1>alpha3Code:{country.alpha3Code}</h1>
            {country.capital !== '' && <h1>capital: {country.capital} </h1>}
        </div>
    )
}

export default CountryDetails;