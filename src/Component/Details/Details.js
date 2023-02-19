import React from 'react';
import './Details.css'
import { useParams } from 'react-router-dom';  
import detailsImg from "../../images/banner/b16.jpg"
import ProductData from '../../ProductData/ProductData';

const Details = () => {
    const {id}= useParams()  ;
    const productInfo = ProductData;
    const product = productInfo.find( pd => pd.id === id);
    console.log(product)
    const { name, title, stock,categores, price} = product;
    
    return (
        <div className='details'>
            <div className="details-img">
                 <img src={detailsImg} alt="image no showing" />
            </div>
            <div className="details-des">
                <h3 className='text-danger'>Product Name : {name}</h3>
                <h4>Description : {title}</h4>
                <p>Category : {categores}</p>
                <p>Stock : {stock} Items are available</p>
                <h4>Price : {price}</h4>
                <p>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta fugit quis vero, possimus maxime veritatis alias tempore molestias nobis quasi. Aut veritatis optio dolorum iusto quidem eaque reprehenderit! Excepturi ducimus repudiandae quidem dignissimos, quae a, laboriosam porro voluptatibus vel eveniet deleniti fuga nostrum unde inventore pariatur asperiores veritatis itaque sunt illo delectus sint, veniam enim autem! Molestiae aliquam, voluptatibus dolorem tempora a facere minus, sequi est dolores praesentium excepturi molestias dolorum qui. Aut fugit rerum ullam voluptate vitae voluptates quis dolore tempore quaerat provident reiciendis officia incidunt sunt accusantium blanditiis, non, voluptatibus consequuntur laborum deleniti itaque architecto id odit.</p>
            </div>
        </div>
    );
};

export default Details;