import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App1 from "./App1.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage.jsx";
import Innerpage from "./Innerpage.jsx";
import Router from "./Router.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App1 /> */}
    {/* <Homepage/> */}
    {/* <Innerpage/> */}
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
