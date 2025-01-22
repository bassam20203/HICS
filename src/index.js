
// ReactDOM.render(
//   <BrowserRouter basename="/Natega">
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// )

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
