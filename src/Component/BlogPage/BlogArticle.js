import React from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css'
const BlogArticle = (props) => {
    const {title, des, btn, img, id} = props.blog;
 
    return (
        <div className='blogArticle'>
          <div className='blog-img'>
            <img src={img} alt="" />
        </div>
        <div className="blog-des">
            <h4>{title}</h4>
            <p>{des}</p>
             <Link to={"/details/"+id}>{btn}</Link>
        </div>
         </div>
    );
};

export default BlogArticle;