import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { ChosenDateContextProvider,
  PopupContextProvider,
  ChosenTimeContextProvider,
  ScheduledAppointmentsContextProvider} from './context';


ReactDOM.render(
  <React.StrictMode>
    <PopupContextProvider>
    <ChosenDateContextProvider>
    <ChosenTimeContextProvider>
    <ScheduledAppointmentsContextProvider>
      <App />
    </ScheduledAppointmentsContextProvider>
    </ChosenTimeContextProvider>
    </ChosenDateContextProvider>
    </PopupContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);