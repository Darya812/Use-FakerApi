import React from "react";
import Product from "../Product";
import style from "./ProductsGrid.module.scss";

const ProductsGrid = ({ products, activeButton }) => {
  return (
    <div className={style.wrapperProducts}>
      {products.map((item) => {
        return (
          <Product
            tag={item.tags[0]}
            activeButton={activeButton}
            src={item.image}
            price={item.price}
            name={item.name}
            key={item.name}
          />
        );
      })}
    </div>
  );
};

export default ProductsGrid;
