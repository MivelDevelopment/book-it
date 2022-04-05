import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChosenDateContextProvider } from './context/chosen-date-context';
import { PopupContextProvider} from './context/popup-context';

ReactDOM.render(
  <React.StrictMode>
    <PopupContextProvider>
    <ChosenDateContextProvider>
      <App />
    </ChosenDateContextProvider>
    </PopupContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);