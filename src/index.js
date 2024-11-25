import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Aquí importamos BrowserRouter
import App from "./App";

ReactDOM.render(
  <Router>
    {" "}
    {/* Envuelve toda la app en Router */}
    <App />
  </Router>,
  document.getElementById("root")
);
