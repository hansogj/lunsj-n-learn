import 'array.defined/lib/polyfill';
import 'array.onempty';

import 'typeface-roboto'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Router from './Router/index';
import SystekLogo from './icons/systek.logo.png';

ReactDOM.render(
  <React.StrictMode>
    <Router />
    <div className="systeklogo">
      <img src={SystekLogo} alt="SystekLogo" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
