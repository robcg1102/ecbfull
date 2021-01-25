import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "bootswatch/dist/pulse/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
