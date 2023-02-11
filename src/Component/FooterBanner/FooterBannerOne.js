import React from 'react';
import { Link } from 'react-router-dom' 
import './FooterBannerOne.css'
const FooterBannerOne = () => {
    return (
        <>
        <div className='footer-banner-one'>
            <div className="banerOne">
                <h5>Lorem Ipsum Dolor Sit.</h5>
                <h3>Lorem Ipsum Dolor Sit Amet</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/shop">
                    <button className='btn btn-outline-primary btn-lg mt-3'>Shop Now</button>
                </Link>
            </div>
            <div className="bannerTwo">

                <h5>Lorem Ipsum Dolor Sit.</h5>
                <h3>Lorem Ipsum Dolor Sit Amet</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/shop">
                    <button className='btn btn-outline-light btn-lg mt-3'>Shop Now</button>
                </Link>
            </div>
        </div>
        <div className="footerBannerTwo">
              <div className="fBanner3 bOne">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className="fBanner3 bTwo">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
              <div className="fBanner3 bThree">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
        </div>

        </>
    );
};

export default FooterBannerOne;