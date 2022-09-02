import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App1';
// import App from './App'
import Rodape from './Rodape'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1 />
    <Rodape/>
  </React.StrictMode>
);
reportWebVitals();
