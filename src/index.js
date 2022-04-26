import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import {
  ChosenDateContextProvider,
  PopupContextProvider,
  ChosenTimeContextProvider,
  ScheduledAppointmentsContextProvider,
  AvailableSchedulesContextProvider,
  AuthContextProvider
} from './context';

localStorage.removeItem('isAuth');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);