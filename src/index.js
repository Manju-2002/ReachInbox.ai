// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; // Adjust the path as needed
import { WebSocketProvider } from './context/WebSocketContext'; // Adjust the path as needed
import './styles.css'; // Import your styles here

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <WebSocketProvider>
      <App />
    </WebSocketProvider>
  </ThemeProvider>
);
