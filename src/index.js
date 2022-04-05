import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChosenDateContextProvider } from './context/chosen-date-context';
import { PopupContextProvider} from './context/popup-context';
import { ChosenTimeContextProvider } from './context/chosen-time-context';
import { ScheduledAppointmentsProvider } from './context/scheduled-appointments-context';

ReactDOM.render(
  <React.StrictMode>
    <PopupContextProvider>
    <ChosenDateContextProvider>
    <ChosenTimeContextProvider>
    <ScheduledAppointmentsProvider>
      <App />
    </ScheduledAppointmentsProvider>
    </ChosenTimeContextProvider>
    </ChosenDateContextProvider>
    </PopupContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);