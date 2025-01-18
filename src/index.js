
// ReactDOM.render(
//   <BrowserRouter basename="/Natega">
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// )


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/HICS">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);