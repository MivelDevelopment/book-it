import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PopupContextProvider } from './context/popup-context';
import { SelectedDateContextProvider } from './context/selected-date-context';

ReactDOM.render(
  <React.StrictMode>
    <SelectedDateContextProvider>
    <PopupContextProvider>
      <App />
    </PopupContextProvider>
    </SelectedDateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);