import React, { useState } from "react";
import ProductsGrid from "../ProductsGrid";
import ProductsList from "../ProductsList";
import SortButtonsView from "../SortButtonsView";
import style from "./Content.module.scss";

const Content = ({ products }) => {
  const [activeButton, setActiveButton] = useState("list");

  return (
    <div className={style.containerContant}>
      <SortButtonsView
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <div>
        {activeButton === "list" && (
          <ProductsList activeButton={activeButton} products={products} />
        )}
        {activeButton === "grid" && (
          <ProductsGrid activeButton={activeButton} products={products} />
        )}
      </div>
    </div>
  );
};

export default Content;
