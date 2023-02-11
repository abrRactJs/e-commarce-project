import React from 'react';
import './SuccessOrder.css'
const SuccessOrder = () => {
   
    return (
        <div  className='successOrder'>
            <h1 className='text-success'>Welcome ! Your Order SuccessFully Done .</h1>
            <h5 className='text-capitalize my-3'> your product will arrive within the specified time </h5>
            <h3 className='text-danger text-uppercase'>Stay with us || Thank you</h3>

        </div>
    );
};

export default SuccessOrder;