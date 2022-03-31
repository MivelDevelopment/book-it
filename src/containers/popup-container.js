import React from 'react';

import { SchedulePopup } from "../components";

export const PopupContainer = ({ popupOpen, togglePopup, selectedDate }) => {    

    return (
        <SchedulePopup 
            onClick={() => togglePopup()} 
            popupOpen={popupOpen}
        >
            <h1>
                {selectedDate.day}. {new Date(selectedDate.year, selectedDate.month).toLocaleString('en-US', { month: 'long' })}  {selectedDate.year}.
            </h1>
        </SchedulePopup>
    )
}