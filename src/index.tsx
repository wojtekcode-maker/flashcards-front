import React from 'react';
import ReactDOM from 'react-dom/client';
import './config/firebase.config';
import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
