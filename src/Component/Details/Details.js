import React from 'react';
import './Details.css'
import { useParams } from 'react-router-dom';  

const Details = () => {
    const {id}= useParams()  
    return (
        <div className='details'>
            <h3 className='text-uppercase text-info border-bottom mb-3'>Product ID No Is : {id}</h3>
            <h3 className='text-danger text-center text-capitalize'>due the some problem it was not possible to show the product details . <br /> it is resolved very soon <br />
             || Thanks</h3>
        </div>
    );
};

export default Details;