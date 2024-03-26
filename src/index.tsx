import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals.ts";
import "./index.css";
import {store} from "./redux-toolkit-example/store/index.tsx"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);

reportWebVitals();