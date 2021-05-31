import { SET_PRODUCTS_DATA, SET_ADD_FILTER, SET_REMOVE_FILTER } from "./consts";

const defaultState = {
  productsData: [],
  filterData: [],
};

export function productsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PRODUCTS_DATA: {
      return { ...state, productsData: action.payload };
    }
    case SET_ADD_FILTER: {
      return { ...state, filterData: [...state.filterData, action.payload] };
    }
    case SET_REMOVE_FILTER: {
      const filteredData = state.filterData.filter(
        (i) => i.id !== action.payload
      );
      return { ...state, filterData: filteredData };
    }
    default:
      return state;
  }
}
