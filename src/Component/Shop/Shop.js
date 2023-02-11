import React, { useContext } from 'react';
import './Shop.css'
import Banner from '../Banner/Banner';
import ProductData from '../../ProductData/ProductData';
import Product from '../../Component/Product/Product';
import { cartContext } from '../../App';

import { Link } from 'react-router-dom';
const Shop = () => {

    const products = ProductData;
    const [cart, setCart] = useContext(cartContext)

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop'>
             <div className="banner-container">
             <Banner 
                heading="Welcome To Our Shop || Have a nice journey"  
                homeBtn="homeBtn shopBtn" 
                homeText="shopText"
                homeBanner="ShopBanner"
            ></Banner>
             </div>
            <div className="product-wapper mt-4">
                <div className="text-center my-4">
                    <h1 className='text-uppercase text-success'>Featured Product</h1>
                    <p className='border-bottom p-2'>Summer Collection New Modern Design</p>
                    <h4 className='text-uppercase text-primary'> {cart.length} Items Select </h4>
                    <h5 className='text-danger text-capitalize'>
                        Please Check <span className='text-dark p-2 pointer' title='See Your selected Items'> <Link to="/cart">CART</Link> </span>
                        Option On the Top And See Details Your Items
                    </h5>
                </div>
                <div className="product-container">
                    {
                        products.map(pd => <Product
                            product={pd}
                            key={pd.id}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;