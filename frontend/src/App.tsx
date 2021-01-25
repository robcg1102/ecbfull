import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import DetailMaintenance from "./Components/Detail/DetailMaintenance";
import FormMaintenance from "./Components/Form/FormMaintenance";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App mb-4">
      <Navbar />
      <div className="container p-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={DetailMaintenance} />
          <Route exact path="/new" component={FormMaintenance} />
          <Route exact path="/edit/:id" component={FormMaintenance} />
        </Switch>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
