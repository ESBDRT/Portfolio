import './error.css'
import { NavLink } from "react-router-dom";

function Error(){
    return (
        <div className='error-div'>
            <h1 className='red'>404</h1>
            <h2>Page not found</h2>
            <h3><NavLink to="/home">Click here to go back to the homepage</NavLink></h3>
        </div>     
    )
}

export default Error;