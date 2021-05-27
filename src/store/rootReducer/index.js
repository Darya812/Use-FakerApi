import { combineReducers } from "redux";
import {productsReducer} from "../productsReducer/reducer";

export const rootReducer = combineReducers({
    productsReducer,
});