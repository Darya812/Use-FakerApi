import React, { useState } from "react";
import style from "./FilterPrice.module.scss";

const FilterPrice = () => {

  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  function handleChangeMin(e) {
    const value = e.target.value;
    setMinPrice(value);
    console.log(minPrice);
  }

  function handleChangeMax(e) {
    const value = e.target.value;
    setMaxPrice(value);
  }

  const handleKeyPress = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      <input
        className={style.inputPrice}
        name="min"
        type="text"
        value={minPrice}
        onKeyPress={handleKeyPress}
        onChange={handleChangeMin}
        placeholder="0"
      />
      -
      <input
        className={style.inputPrice}
        name="max"
        type="text"
        value={maxPrice}
        onKeyPress={handleKeyPress}
        onChange={handleChangeMax}
        placeholder="1000000"
      ></input>
    </div>
  );
};

export default FilterPrice;