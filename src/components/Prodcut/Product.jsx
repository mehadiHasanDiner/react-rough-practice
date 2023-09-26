import React from "react";

const Product = (props) => {
  const { image } = props.product;
  return (
    <>
      <div className="">
        <div className="card w-full bg-cyan-800 shadow-2xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
