// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // or react-dom depending on version
import './index.css';               // existing global styles
import './styles/global.css';       // <-- your new CSS
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);
