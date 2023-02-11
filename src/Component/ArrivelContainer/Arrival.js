import React from 'react';
import { Link } from 'react-router-dom';
import './Arrival.css'
const Arrival = (props) => {
    const {title, heading, btn, arrivalHomeBtn} = props;
   
    return (
        <div className='arrival'>
            <h5 >{title}</h5>
            <h1>{heading} </h1>
           <Link to="/shop"> <button className={arrivalHomeBtn}>{btn}</button></Link>
        </div>
    );
};

export default Arrival;