import React from 'react';
import Banner from '../Banner/Banner';
import './About.css'
import img from '../../images/about/a6.jpg'
import appVideo from '../../images/about/1.mp4'
import fImg1 from '../../images/features/f1.png'
import fImg2 from '../../images/features/f2.png'
import fImg3 from '../../images/features/f3.png' 
import fImg4 from '../../images/features/f4.png'
import fImg5 from '../../images/features/f5.png'
import fImg6 from '../../images/features/f6.png'
const About = () => {
    return (
        <div className='about-page'>
            <div className="banner">
                <Banner
                    heading="#About Us"
                    text="Lorem Ipsum Dolor Sit Amet Consectetur."
                    homeBtn="blogBtn"
                    homeBanner="blogBanner aboutBaner"
                ></Banner>
            </div>
            <div className="about-container">
                <div className="aboutArticle">
                    <div className="abArtilce-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="abArticle-des">
                        <h1>#Who We Are ?</h1>
                        <p> consectetur, dolorem similique doloremque architecto aliquam. Id, veritatis vero itaque illum ab deserunt fuga. Animi veritatis minus atque quisquam cumque! Adipisci sequi, nam natus voluptatum similique iure, illo vel minima distinctio iste quo incidunt excepturi commodi. Obcaecati rem sit porro quasi quis nulla iure eligendi. Quibusdam labore velit porro saepe sapiente corrupti nostrum delectus blanditiis iure nemo quisquam voluptas ipsum, beatae, sint autem totam accusantium consequatur minima fugit hic repellat ipsa qui alias illo? Quo deleniti quos perspiciatis molestiae iure ducimus excepturi eligendi debitis facere culpa unde eaque nam minus voluptatum commodi vitae nesciunt ullam rem, magni modi et quidem! Porro voluptatum esse, itaque est adipisci ab! Possimus voluptatibus autem at cumque laudantium nesciunt fugiat nostrum quae id sed repudiandae aut suscipit quisquam perspiciatis qui provident placeat, totam quasi voluptates? Non ullam, beatae quo minima in, reprehenderit consectetur voluptatibus, expedita ipsum exercitationem laboriosam. Illum expedita corrupti totam earum alias nulla?</p>
                        <h4>One of the best online shop in bd </h4>
                    </div>
                </div>

             <div className="download-app">
                <h1>downlaod our app</h1>
                 <video src={appVideo} autoPlay controls></video>
             </div>
             
             <div className="fetures-app"> 
             <img src={fImg1} alt="" />
             <img src={fImg2} alt="" />
             <img src={fImg3} alt="" />
             <img src={fImg4} alt="" />
             <img src={fImg5} alt="" />
             <img src={fImg6} alt="" />
             </div>

            </div>
        </div>
    );
};

export default About;