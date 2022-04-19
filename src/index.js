import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { ChosenDateContextProvider,
  PopupContextProvider,
  ChosenTimeContextProvider,
  ScheduledAppointmentsContextProvider,
  AvailableSchedulesContextProvider } from './context';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PopupContextProvider>
      <ChosenDateContextProvider>
      <ChosenTimeContextProvider>
      <ScheduledAppointmentsContextProvider>
      <AvailableSchedulesContextProvider>
        <App />
      </AvailableSchedulesContextProvider>
      </ScheduledAppointmentsContextProvider>
      </ChosenTimeContextProvider>
      </ChosenDateContextProvider>
      </PopupContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);