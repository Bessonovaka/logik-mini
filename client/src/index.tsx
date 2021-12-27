import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRoutes from "../src/routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "../src/store";

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <AppRoutes />
    </div>
  </Provider>,
  document.getElementById("root")
);
