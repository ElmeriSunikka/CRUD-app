import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CRUD from './CRUD'; //Tää pitää muuttaa tiedoston nimeks ja kans toi rivi 11
import reportWebVitals from './reportWebVitals';
import'./CRUD.css'; //muista kans muuttaa CSS:ää

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CRUD /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
