import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppRouter from "./Routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
