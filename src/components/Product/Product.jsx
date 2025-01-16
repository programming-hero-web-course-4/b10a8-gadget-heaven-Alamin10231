import React from 'react';

const Product = ({product}) => {
    const {product_title,product_image}=product
    return (
        <div className="card bg-base-100 max-w-md mx-auto shadow-xl">
  <figure>
    <img
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;