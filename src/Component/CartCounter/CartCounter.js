import React from 'react';
import { Link } from 'react-router-dom';
import './CartCounter.css'

const CartCounter = (props) => {
    const cart = props.cart;

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price

    }

    let shipping = 0;
    if (totalPrice < 150 && totalPrice !== 0) {
        shipping = 5;
    } else if (totalPrice > 150) {
        shipping = 20;
    }

    let vat = 0;
    if (totalPrice > 200) {
        vat = 5.3
    }
    return (
        <div className="cartCounter">
            <h3 className='text-info text-uppercase border-bottom'>Order Summary</h3>
            <h4 className='my-3 text-warning'>Selected Products : <span className='text-danger'> {cart.length}</span> Items</h4>
            <h5>Price : {totalPrice} BDT </h5>
            <h5 className='my-3'>Shipping : {shipping} BDT </h5>
            <h5>VAT & TAXT : {vat} BDT </h5>
            <h5 className='my-3'>Total Price : {totalPrice + shipping + vat} </h5>
            {totalPrice !== 0 ?
                <Link to="/successOrder">
                    <button className='btn btn-success mt-2 w-100'>Place Order</button>
                </Link>
                : <button className='btn btn-danger mt-2 w-100'>Empty Items</button>
            }
        </div>
    );
};

export default CartCounter;