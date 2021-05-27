import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js";
import "regenerator-runtime/runtime";
import App from "./App";
import "./Base.scss";
import { rootReducer } from "./store/rootReducer/index";
import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
