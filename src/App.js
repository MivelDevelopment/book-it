import './App.css';
import React from 'react';

import { CalendarContainer } from './containers/calendar/calendar-container';
import { PopupContainer } from './containers/popup-modal/popup-container';
import { DashboardContainer } from './containers/dashboard/dashboard-container';

const App = () => {
  return (
    <>
      {/* <DashboardContainer /> */}
      <CalendarContainer />
      <PopupContainer />
    </>
  );
}

export default App;
