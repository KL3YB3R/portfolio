import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import "./index.css";
// import { animate } from "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
