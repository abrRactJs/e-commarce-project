import React from 'react';
import './Newslater.css'
const Newslater = () => {
    return (
        <div className='newslater'>
           <div className="newsText">
              <h2>Lorem Ipsum Dolor Sit Amet</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
           </div>
           <div className="newsInput">
             <form action="">
             <input className='py-3 form-control' type="text" required placeholder='Email' />
             <input className='py-3 px-4 btn btn-info fBtn'  type="submit" />
             </form>
           </div>
        </div>
    );
};

export default Newslater;