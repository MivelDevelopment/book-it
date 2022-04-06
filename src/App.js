import './App.css';
import React from 'react';

import { CalendarContainer } from './containers/calendar/calendar-container';
import { PopupContainer } from './containers/popup-modal/popup-container';

const App = () => {
  return (
    <>
      <CalendarContainer />
      <PopupContainer />
    </>
  );
}

export default App;
