import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // 👈 Cambiar aquí
import App from './App.jsx';
import './styles/index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter> {/* 👈 Y aquí */}
    <App />
  </HashRouter>
);
