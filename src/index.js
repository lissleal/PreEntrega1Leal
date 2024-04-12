import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("Inicio de la aplicación");

root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);


