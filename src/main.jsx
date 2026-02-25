import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ListProvider } from "./context/ListContext";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ListProvider>
      <App />
    </ListProvider>
  </>
);