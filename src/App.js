import './App.css';
import React from 'react';

import { CalendarContainer } from './containers/calendar-container';
import { PopupContainer } from './containers/popup-container';
import { ChosenDateContextConsumer } from './context/chosen-date-context';
import { PopupContextConsumer } from './context/popup-context';

const App = () => {

  return (
    <PopupContextConsumer>
    {({ isPopupOpen, setIsPopupOpen, togglePopup}) => (
      <ChosenDateContextConsumer>
        {({chosenDate, setChosenDate}) => (
        <>
          <div>
            <CalendarContainer setChosenDate={setChosenDate} setIsPopupOpen={setIsPopupOpen} />
          </div>
          <PopupContainer chosenDate={chosenDate} isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
        </>
        )}
      </ChosenDateContextConsumer>
    )}
    </PopupContextConsumer>
  );
}

export default App;
