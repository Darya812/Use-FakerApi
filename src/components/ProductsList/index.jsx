import React from "react";
import Product from "../Product";

const ProductsList = ({ products, activeButton }) => {
  return (
    <div >
      {products.map((item) => {
        return (
          <Product
            src={item.image}
            activeButton={activeButton}
            tag={item.tags[0]}
            price={item.price}
            description={item.description}
            name={item.name}
            key={item.name}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
