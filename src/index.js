import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as express from "express";

//const express = require("express");
//const app = express();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//***************** ADDED due to error on hostin gon k8s****************
//app.use(express.static(__dirname));
//app.use(express.static(path.resolve(__dirname, '../client/build')));
//app.get("/*", function(req, res) {
//res.sendFile(path.join(__dirname, "index.html"));
//});

//*********************************************************************

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
