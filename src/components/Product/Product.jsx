import React from 'react';

const Product = ({product}) => {
    const {product_title,product_image,price}=product
    return (
        <div className="card bg-base-100 max-w-md mx-auto shadow-xl">
  <figure>
    <img className='w-[400px] h-[350px] object-contain'
      src={product_image}
      alt="Product" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p className='font-semibold text-gray-500'>Price: {price}</p>
    <div className="card-actions justify-start">
      <button className="btn border-1 border-[#9538E2] rounded-3xl text-[#9538E2] bg-white hover:bg-[#9538E2] hover:text-white px-7">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Product;