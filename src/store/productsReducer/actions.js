import { SET_PRODUCTS_DATA, SET_ADD_FILTER, SET_REMOVE_FILTER } from "./consts";

const setProducts = (data) => {
  return {
    type: SET_PRODUCTS_DATA,
    payload: data,
  };
};

export const setAddFilter = (data) => {
  return {
    type: SET_ADD_FILTER,
    payload: data,
  };
};

export const setRemoveFilter = (id) => {
  return {
    type: SET_REMOVE_FILTER,
    payload: id,
  };
};

export const setProductsDataAsync = () => {
  return (dispatch) => {
    fetch(
      `https://fakerapi.it/api/v1/products?_quantity=10&_taxes=12&_categories_type=uuid_locale=en_US`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch(setProducts(result.data));
        },
        (error) => {
          alert("try again");
        }
      );
  };
};
