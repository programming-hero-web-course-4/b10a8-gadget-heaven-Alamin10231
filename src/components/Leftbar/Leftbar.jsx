import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Leftbar = () => {
    const alldata = useLoaderData()
    const filtercategory = Array.from(new Set(alldata.map(category => category.category)))
 
    return (
        <div className='grid grid-cols-1 gap-6'>
             <NavLink to={`/`} className={({ isActive }) => isActive ? "btn bg-[#9538E2] text-white font-bold rounded-[32px] w-4/5 mx-auto mt-8" : "btn bg-[#09080F0D] rounded-[32px] text-black w-4/5 mx-auto mt-8"}>All Product</NavLink>
            {
                filtercategory.map((category,index)=>(
                    <NavLink key={index} to={`/home/${category}`} className={({isActive})=>isActive
                    ?
                    
                    "btn bg-[#9538E2] text-white font-bold rounded-[32px] w-4/5 mx-auto"
                    
                    :"btn bg-[#09080F0D] rounded-[32px] text-black w-4/5 mx-auto"
                
                }>{category}</NavLink>
                ))
            }
        </div>
    );
};

export default Leftbar;