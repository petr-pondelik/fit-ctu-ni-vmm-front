import React from 'react';
import ReactDOM from 'react-dom';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'leaflet/dist/leaflet.css'
import './index.css';

import App from "./Components/App/App";

// Init Materialize MaterializeDatepicker components
// document.addEventListener('DOMContentLoaded', function() {
//     let e = document.querySelectorAll('.datepicker');
//     let instances = M.MaterializeDatepicker.init(e, {});
// });

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
