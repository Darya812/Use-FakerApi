import React, { useState } from "react";
import style from "./Category.module.scss";

const FilterCategory = ({ name }) => {
  const [x, setX] = useState(false);
  const onChange = (input) => {
    setX(x);
    if (input.checked === true) {
      setTimeout(() => {
        alert(`Filter ${input.id} added`);
      }, 100);
    } else {
      setTimeout(() => {
        alert(`Filter ${input.id} removed`);
      }, 100);
    }
  };

  return (
    <div className={style.wrapperCategory}>
      <input
        id={name}
        type="checkbox"
        chacked={x}
        onChange={(e) => onChange(e.target)}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default FilterCategory;
