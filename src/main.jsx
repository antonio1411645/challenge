import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import "./styles/global.css";
import { PlanProvider } from "./context/PlanContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlanProvider>
      <App />
    </PlanProvider>
  </React.StrictMode>
);
