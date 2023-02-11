import React from 'react';
import BlogData from '../../ProductData/BlogData';
import Banner from '../Banner/Banner';
import './Blog.css'
import BlogArticle from './BlogArticle';
const Blog = () => {

   const BlogInfo =  BlogData;
    return (
        <div className='blog-container'> 
            <Banner 
                    heading="#Read More"
                    text="Lorem Ipsum Dolor Sit Amet Consectetur."
                    homeBtn="blogBtn" 
                    homeBanner="blogBanner"
            ></Banner>
            <div className="blog">
                {
                    BlogInfo.map(blog =>   <BlogArticle blog={blog}></BlogArticle>  )
                }
            </div>
        </div>
    );
};

export default Blog;