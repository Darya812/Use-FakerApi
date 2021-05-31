import React from "react";
import style from "./Product.module.scss";
import classnames from "classnames";

const Product = ({ tag, src, description, name, price, activeButton }) => {
  function buyNow() {
    alert("Product added to cart!");
  }
  function getDescription() {
    if (description) {
      return <b>Description:</b> + description;
    }
    return "";
  }
  return (
    <div
      className={classnames(style.containerProduct, {
        [style.activeList]: activeButton === "list",
      })}
    >
      <img className={style.img} src={src} alt="picture" />
      <div className={style.containerDescription}>
        <p className={style.name}>{name}</p>
        <p className={style.description}>{getDescription()}</p>
        <b>Tag:</b>
        <p className={style.tag}>{tag}</p>
      </div>
      <div className={style.containerPrice}>
        <p className={style.price}>{price}</p>
        <p className={style.priceMonth}>{(price / 12).toFixed(2)} per month</p>
        <button onClick={buyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default Product;