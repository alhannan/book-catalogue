import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppRouter from "./Routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { auth } from "./Firebase";
import { userDetail } from "./Actions/auth";

const store = configureStore();

ReactDOM.render(
    <Loader
      type="Puff"
      color="#ce4076"
      height={60}
      width={60}
      className="spinner"
    />,
  document.getElementById("root")
);

auth.onAuthStateChanged(async (user) => {
  (await user) && (await store.dispatch(userDetail(user)));
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById("root")
  );
});
