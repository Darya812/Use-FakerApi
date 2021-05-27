import React from "react";
import FilterBrand from "../FilterBrand";
import FilterCategory from "../FilterCategory";
import FilterPrice from "../FilterPrice";
import style from "./FilterPanel.module.scss"

const categories = [
  {
    name: "Components",
    id: 1,
  },
  {
    name: "Modules",
    id: 2,
  },
];

const FilterPanel = ({products}) => {

  return (
    <form>
      <div className={style.container}>
        <span>Category</span>
        {categories.map((i) => {
          return <FilterCategory name={i.name} key={i.id} />;
        })}
      </div>
      <div className={style.container}>
        <span>Brand (Tags)</span>
        {products.map((i) => {
          return <FilterBrand name={i.tags[0]} key={i.upc}/>;
        })}
      </div>
      <div className={style.container}>
        <span>Price</span>
        <FilterPrice/>
      </div>
    </form>
  );
};

export default FilterPanel;