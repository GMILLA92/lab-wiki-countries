import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <h1>LAB - WikiCountries.</h1>
            <Link to= {'/listCountries/'}>List of countries</Link>
        </div>
    )
}

export default Navbar;