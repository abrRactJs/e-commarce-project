import React from 'react';
import Banner from '../Banner/Banner';
import './Contact.css'
import parson1 from '../../images/people/1.png'
import parson2 from '../../images/people/2.png'
import parson3 from '../../images/people/3.png'
const Contact = () => {
   return (
      <div className='contact-page'>
         <div className="banner">
            <Banner
               heading="#Contact Us"
               text="any kind of problems to contact us."
               homeBtn="blogBtn"
               homeBanner="blogBanner contactBanner"
            ></Banner>
         </div>

         <div className="location-part">
            <h4>visit on of our agency locations are contact us today</h4>
            <h5>Home office</h5>
            <ul>
               <li>Address : Rangpur, Lalmonirhat || road no: 1212</li>
               <li>Phone : 01321040273</li>
               <li>Tel : 9833774</li>
               <li>Email : supershop1@gmail.com</li>
            </ul>
         </div>

         {/* form and review */}

         <div className="contact-info">
            <div className="form-container">
               <h5 className='text-success'>Send a Massege</h5>
               <h4 className='mb-4 text-danger'>We Love to here from you</h4>
               <form >
                  <input className='form-control mb-1' required type="text" placeholder='Name' /> <br />
                  <input className='form-control mb-1' required type="email" placeholder='Email@.com' /> <br />
                  <input className='form-control mb-1' required type="password" placeholder='Password' /> <br />
                  <textarea className='form-control mb-1 text-area' required placeholder='Write Massege'></textarea> <br />
                  <input className='btn btn-success btn-lg' type="submit" />
               </form>
            </div>
            <div className="review-container">
               <h2 className='text-uppercase text-danger mb-4'>Costomar Review</h2>
               <div className="review">
                  <div className="review-img">
                     <img src={parson1} alt="" />
                  </div>
                  <div className="review-text">
                     <p>  Dolores explicabo expedita ullam blanditiis doloribus. Reprehenderit voluptate accusantium eligendi eveniet accusamus dignissimos debitis nesciunt aut blanditiis quidem, error odit illo at</p>
                  </div>
               </div>
               <div className="review">
                  <div className="review-img">
                     <img src={parson2} alt="" />
                  </div>
                  <div className="review-text">
                    <p> Perferendis molestias nemo asperiores, officiis libero excepturi maiores eaque voluptatum illum laudantium repellat nostrum ratione pariatur. Molestiae asperiores</p>
                  </div>
               </div>
               <div className="review">
                  <div className="review-img">
                     <img src={parson3} alt="" />
                  </div>
                  <div className="review-text">
                     <p> dio obcaecati modi. Qui aut repellendus est quaerat similique officia nesciunt harum consectetur ex a, sequi, distinctio, asperiores atque animi expedita maxime autem provident</p>
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
};

export default Contact;