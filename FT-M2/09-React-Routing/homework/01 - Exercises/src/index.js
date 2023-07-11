import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

//aqbrazamos el componente App con el componente BrowserRouter dentro del reactDOM.render
ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>

, document.getElementById("root"));
