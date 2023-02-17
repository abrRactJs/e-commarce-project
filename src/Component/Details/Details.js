import React from 'react';
import './Details.css'
import { useParams } from 'react-router-dom';  
import ProductData from '../../ProductData/ProductData';

const Details = () => {
    const {id}= useParams()  ;
    const productInfo = ProductData;
    const product = productInfo.find( pd => pd.id === id);
    console.log(product)
    const { name, title, des, img} = product;
    
    return (
        <div className='details'>
            <div className="details-img">
                 <img src={img} alt="image no showing" />
            </div>
            <div className="details des">
                <h4>des</h4>
            </div>
        </div>
    );
};

export default Details;