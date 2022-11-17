import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CountriesList(props){
  
    const [countries, setCountry] = useState([])
   
    useEffect(()=> {
        setCountry(props.countries)
    }, [])

    console.log(countries)
    return(
        <div>
            <h1>List of countries</h1>
            {countries.map((country)=> {
                return (
                    <div key= {country.alpha3Code}>
                        <h1>{country.name.common}</h1>
                       
                        <Link to= {`/listCountries/${country.alpha3Code}`}>See details!</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList;