import React from 'react';
import './CartItems.css'
const CartItems = (props) => {
    const { name, title, stock, price, categores, img, id } = props.cartItems
    return (
        <div className='cartItems'>
            <div className="cartItems-img">
                <img src={img} alt="" />
            </div>
            <div className="cartItemsText">
                <h3 className='text-primary text-capitalize mb-3'> {name}</h3>
                <h4>{title}</h4>
                <p>Category : {categores}</p>
                <p>Stock : {stock} Products Are Available</p>
                <h5 className='text-danger'>Price : {price} BDT</h5>
                <button onClick={() => props.handleRemove(id)} className='btn btn-danger mt-3'>Remove from Cart</button>
            </div>
        </div>
    );
};

export default CartItems;