import './App.css';
import React from 'react';

import { CalendarContainer } from './containers/calendar/calendar-container';
import { PopupContainer } from './containers/popup-modal/popup-container';
import { DashboardContainer } from './containers/dashboard/dashboard-container';
import { LoginPage } from './pages';


const App = () => {
  return (
    <>
      <LoginPage />
      <DashboardContainer />
      <CalendarContainer />
      <PopupContainer />
    </>
  );
}

export default App;
