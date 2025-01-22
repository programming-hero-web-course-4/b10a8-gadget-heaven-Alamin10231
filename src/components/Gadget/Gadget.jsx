import React from 'react';
import { NavLink } from 'react-router-dom';

const Gadget = ({gadget}) => {
    const { product_id,product_title,price,product_image}= gadget;
    return (
        <div className='border-2 shadow-md p-4 rounded-2xl mx-10 min-w-[350px] min-h-[400px]'>
            <img className='w-[400px] h-[300px] object-fill' src={product_image} alt="" />
            
            <h1 className='py-4 text-lg font-bold text-gray-800'>{product_title}</h1>
            <h1 className='text-[16px] font-semibold text-gray-600'>Price: {price}</h1>
            <div className="card-actions w-full mt-4">
                    <NavLink to={`/product/${product_id}`} className="btn btn-outline text-[#9538E2] border border-[#9538E2] rounded-[32px]">View Details</NavLink>
                </div>
        </div>
    );
};

export default Gadget;