import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [allproduct, setallproduct] = useState([]);
    
    useEffect(() => {
        fetch("/GadgetData.json")
            .then(res => res.json())
            .then(data => setallproduct(data));
    }, []);
    
    return (
        <div className="px-6 md:px-12 lg:px-20 py-10">
            <h1 className="text-4xl font-bold text-center mb-10">Explore Cutting-Edge Gadgets</h1>
            <div className="flex flex-wrap lg:flex-nowrap gap-10 ">
               
                <div className="w-full lg:w-1/5 shadow-md p-4 font-bold items-center text-center max-h-[600px]">
                  <button className='border-none px-20 py-3 rounded-3xl bg-slate-200 text-md hover:bg-stone-300 my-4'>All Product</button>
                  <button className='border-none px-20 py-3 rounded-3xl bg-slate-200 text-md hover:bg-stone-300 my-4'>Phones</button>
                  <button className='border-none px-20 py-3 rounded-3xl bg-slate-200 text-md hover:bg-stone-300 my-4'>Laptops</button>
                  <button className='border-none px-20 py-3 rounded-3xl bg-slate-200 text-md hover:bg-stone-300 my-4'>Tablets</button>
                  <button className='border-none px-20 py-3 rounded-3xl bg-slate-200 text-md hover:bg-stone-300 my-4'>Headphones</button>
                  <button className='border-none px-20 py-3 rounded-3xl bg-slate-200 text-md hover:bg-stone-300 my-4'>Earbuds</button>
                 
                </div>

                
                <div className="w-full lg:w-4/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            allproduct.map(product => (
                                <Product key={product.product_id} product={product}></Product>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
