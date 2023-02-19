import React from 'react';
import './Shipment.css'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const Shipment = () => {
    const nevigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = ()=>{
        nevigate("/successOrder")
    }
    return (
        <div className="shipment">
            <h3 className='text-center mb-3 text-danger text-uppercase'>Submit the order with correct info</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
           
                <input className='form-control' {...register("name", { required: true })}  placeholder="Name"  />
                {errors.name && <span>Name is required</span>}

                <input className='form-control' {...register("email", { required: true })}  placeholder="Email"  />
                {errors.email && <span>Email is required</span>}

                <input className='form-control' {...register("phone", { required: true })}  placeholder="Phone"  />
                {errors.phone && <span>Phone Number is required</span>}

                <input className='form-control' {...register("address", { required: true })} placeholder="Address" />
                {errors.address && <span>Address is required</span>}

                
                <input className='form-control' {...register("zip", { required: true })} placeholder="Zip Code" />
                {errors.zip && <span>Zip Code is required</span>}

                <input className='btn btn-success' type="submit" />
            </form>
        </div>

    );
};

export default Shipment;