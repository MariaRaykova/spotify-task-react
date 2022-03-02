import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Router from "./Router";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App>
      <Router />
    </App>
  </BrowserRouter>,

  rootElement
);
