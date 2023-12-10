import React from "react";

const Card = props => {
  const { title, price, src } = props;
  return (
    <div className="card">
      <div className="img-place">
        <img className="card-img" src={src} alt="card-img" />
      </div>
      <h3 className="title">{title}</h3>
      <p className="price">{price}$</p>
    </div>
  );
};

export default Card;
