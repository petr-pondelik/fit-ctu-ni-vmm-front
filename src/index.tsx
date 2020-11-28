import React from 'react';
import ReactDOM from 'react-dom';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'leaflet/dist/leaflet.css'
import './index.css';

import App from "./Components/App/App";

// Init Materialize Range components
document.addEventListener('DOMContentLoaded', function() {
    let e = document.querySelectorAll('input[type=range]');
    M.Range.init(e);
});

// document.addEventListener('DOMContentLoaded', function() {
//     let e = document.querySelectorAll('input[type=range]');
//     M..init(e);
// });

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
