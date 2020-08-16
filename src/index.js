import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AddSubscriber from "./AddSubscriber";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import * as serviceWorker from "./serviceWorker";
import "./common/Common.css";

ReactDOM.render(
  <React.StrictMode>
    <AddSubscriber />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
