import React from "react";
import "./ProductCard.css";

export const ProductCard = ({ data }) => {
  const { img, heading, price, size, assured, brand } = data;

  return (
    <>
      <div className="card_wrapper">
        <img src={img} alt="product" className="card_img" />
        <div className="text_container">
          <div className="card_heading">
            <p>{heading}</p>
            <img src={assured} alt="" className="tag" />
          </div>
          <div className="card_price">
            {price?.ourPrice}{" "}
            <span className="cut-price">{price?.originalPrice}</span>
          </div>
          <div className="card_productsize">Size: {size}</div>
          <div className="card_productsize">Brand: {brand}</div>
        </div>
      </div>
    </>
  );
};
