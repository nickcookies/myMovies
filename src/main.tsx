import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FetchMoviesProvider } from "./context/MovieProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FetchMoviesProvider>
      <App />
    </FetchMoviesProvider>
  </React.StrictMode>
);
