import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { HelloWorldApp } from "./HelloWorldApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp title="Hola, soy Goku" />
  </React.StrictMode>
);
