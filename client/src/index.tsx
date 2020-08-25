import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";

const initialState = {
  loggedInUser: {},
  users: [],
  posts: [],
};

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
