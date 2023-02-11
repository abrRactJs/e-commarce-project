import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = (props) => {
   const {title, heading, text, btn,homeBtn,homeBanner,homeText, btnLocation} = props;
    return (
        <div className='banner'>
            <div className={homeBanner}>
                  <div className={homeText}>
                    <h5>{title}</h5>
                    <h3>{heading}</h3>
                    <p>{text}</p>
                    <Link to={btnLocation}> <button className={homeBtn}>{btn}</button></Link>
                  </div>
            </div> 
        </div>
    );
};

export default Banner;