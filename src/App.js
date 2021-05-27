import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./Base.scss";
import Content from "./components/Content";
import FilterPanel from "./components/FilterPanel";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setProductsDataAsync } from "./store/productsReducer/actions";
import {
  selectorProducts,
  selectorFilter,
} from "./store/productsReducer/selector";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectorProducts);
  const filters = useSelector(selectorFilter);

  useEffect(() => {
    dispatch(setProductsDataAsync());
  }, []);

  const isFilter =
    filters.length > 0
      ? products.filter((product) =>
          filters.some((filter) => filter.name === product.tags[0])
        )
      : products;

  return (
    <div className="app">
      <Header />
      <div className="main">
        <FilterPanel className="filterPanel" products={products} />
        <Content className="wrapperContentMain" products={isFilter} />
      </div>
    </div>
  );
};
export default App;
