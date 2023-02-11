import React from 'react';
import './FooterContact.css'
import logo from '../../images/logo/logo.png'
import fImg1 from '../../images/pay/app.jpg'
import fImg2 from '../../images/pay/play.jpg'
import fPay from '../../images/pay/pay.png'
const FooterContact = () => {
    return (
        <div className='footerWrapper'>
            <a href="/home"><img src={logo} alt="" /></a>
            <div className="contact">
                <div className="con1">
                    <h5 >Contact</h5>
                    <h6>Address : <span className='conInfo'>Rangpur,Lalmonirhat</span></h6>
                    <h6>Phone : <span className='conInfo'>01321040273</span></h6>
                    <h6>Hours : <span className='conInfo'>24 Hours open</span></h6>
                    <h6>Hours : <span className='conInfo'>24 Hours open</span></h6>
                </div>
                <div className="con1">
                    <h5 >about</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Delivery Time</li>
                        <li> Product Exchance</li>
                        <li> Privet policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="con1">
                    <h5 >my account</h5>
                    <ul>
                        <li>Sign Up</li>
                        <li> Visa Card</li>
                        <li> Pioneer</li>
                        <li> Paypal</li>
                        <li>Rocket</li>
                    </ul>
                </div>
                <div className="con1">
                    <h5 >install app</h5>
                    <p>Install Our Others app In Store</p>
                     <div className="app_wrap">
                         <img src={fImg1} alt="" />
                         <img src={fImg2} alt="" />
                     </div>
                     <div className="pay_system">
                        <h6>Our Pay System</h6>
                         <img src={fPay} alt="" />
                     </div>
                </div>
            </div>
            <div className="footer">
                <p>Developed By <a href="https://www.facebook.com/Aabdurrahim.17" target="_blank">Abdur Rahim</a></p>
                <p>@Copyright 2023</p>
            </div>
        </div>
    );
};

export default FooterContact;