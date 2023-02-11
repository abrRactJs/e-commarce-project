import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const {name, title, price, stock, img,id} = props.product;
   
    return (
        <div className='product'> 
            <div className="productImg">
                <img src={img} alt="" />
            </div>
            <div className="productText p-3">
                <h3><Link to={"/details/"+id}>{name}</Link> </h3>
                <h4>{title}</h4>
                <p>Only {stock} Products Are Available</p>
                <h5>Price : {price} BDT </h5>
                <button onClick={()=>props.handleAddToCart(props.product)} className='btn btn-primary text-uppercase mt-3'>Add To Cart</button>
            </div>
        </div>
    );
};  
 
export default Product;