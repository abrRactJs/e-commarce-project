import React, { useContext } from 'react';
import { cartContext } from '../../App';
import CartCounter from '../CartCounter/CartCounter';
import CartItems from '../CartItems/CartItems';
import './Cart.css'

const Cart = () => {
    const [cart, setCart] = useContext(cartContext) 


    const handleRemove =(productId)=>{
        console.log("remove", productId)
        const removeCart = cart.filter(pd => pd.id !== productId);
         setCart(removeCart)
    }
  
    return (
        <div className='cart-container'>
            <div className="cart-items">
                <h2>Your Selected Products</h2>
                {
                    cart.map(pd => <CartItems 
                        cartItems={pd}
                        handleRemove={handleRemove}
                        ></CartItems>)
                }
            </div>
            <div className="cart-counter">
                <CartCounter cart={cart}></CartCounter>
            </div>
        </div>
    );
};

export default Cart;