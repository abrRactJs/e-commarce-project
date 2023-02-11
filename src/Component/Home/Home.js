import React from 'react';
import './Home.css'
import Arrival from '../ArrivelContainer/Arrival';
import Banner from '../Banner/Banner';
import HomeArticle from '../HomeArticle/HomeArticle';
import FooterBannerOne from '../FooterBanner/FooterBannerOne';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <Banner
                    title="Trade In Offer"
                    heading="Super Value Deal On All Product"
                    text="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing."
                    btn="Shop Now"
                    homeBtn="homeBtn"
                    homeText="homeText"
                    homeBanner="homeBanner"
                    btnLocation="/shop"
                ></Banner>
            </div>
            <div className="homeArticle">
                <HomeArticle></HomeArticle>
            </div>
            <div className="arrival-container">
                <Arrival
                    title="Home Arrivals"
                    heading="Up To 70% Off - All T-Shirt And Accocories"
                    btn='Explore more'
                    arrivalHomeBtn="arrivalHomeBtn"
                ></Arrival>
            </div>

            <div className="footerBannerOne">
                <FooterBannerOne></FooterBannerOne>
            </div>
        </div>
    );
};

export default Home;