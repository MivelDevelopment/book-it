import './App.css';
import React, {useContext} from 'react';

import { CalendarContainer } from './containers/calendar-container';
import { PopupContainer } from './containers/popup-container';
import { ChosenDateContext } from './context/chosen-date-context';
import { PopupContext } from './context/popup-context';

const App = () => {
  const { chosenDate, setChosenDate } = useContext(ChosenDateContext);
  const { isPopupOpen, setIsPopupOpen, togglePopup} = useContext(PopupContext);
  
  return (
    <>
      <div>
        <CalendarContainer setChosenDate={setChosenDate} setIsPopupOpen={setIsPopupOpen} />
      </div>
      <PopupContainer chosenDate={chosenDate} isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
    </>
  );
}

export default App;
