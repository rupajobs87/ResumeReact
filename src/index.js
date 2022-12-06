import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.body.style = 'background: #F0D3CD;';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{padding:'60px', height: '100%'}} >
  <StrictMode>
    <App />
  </StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
