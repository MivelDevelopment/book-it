import './App.css';
import React from 'react';

import { CalendarContainer } from './containers/calendar-container';
import { PopupContainer } from './containers/popup-container';
import { PopupContextConsumer } from './context/popup-context';
import { SelectedDateContextConsumer } from './context/selected-date-context';

const App = () => {
  return (
    <SelectedDateContextConsumer>
      {({selectedDate, setSelectedDate}) => (
      
      <PopupContextConsumer>
        {({popupOpen, togglePopup}) => (
          <>
          <div>
            <CalendarContainer togglePopup={togglePopup} setSelectedDate={setSelectedDate} />
          </div>
          <PopupContainer popupOpen={popupOpen} togglePopup={togglePopup} selectedDate={selectedDate} />
          </>
        )}
      </PopupContextConsumer>
        
      )}
    </SelectedDateContextConsumer>
  );
}

export default App;
