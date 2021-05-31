import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./FilterBrand.module.scss";
import {
  setAddFilter,
  setRemoveFilter,
} from "../../store/productsReducer/actions.js";

const FilterBrand = ({ name }) => {
  const [x, setX] = useState(false);
  const dispatch = useDispatch();

  const onChange = (input) => {
    const newFilter = {
      id: name,
      name,
    };
    if (input.checked === true) {
      dispatch(setAddFilter(newFilter));
    } else {
      dispatch(setRemoveFilter(name));
    }
    setX(input.checked);
  };

  return (
    <div className={style.wrapperBrand}>
      <input type="checkbox" checked={x} onChange={(e) => onChange(e.target)} />
      <label htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </div>
  );
};

export default FilterBrand;
