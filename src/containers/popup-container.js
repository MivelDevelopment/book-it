import React from 'react';

import { PopupOverlay } from "../components";
import { FormContainer } from './form-container';
import { ScheduleTimeContainer } from './schedule-time-container';

export const PopupContainer = ({ chosenDate, isPopupOpen, togglePopup }) => {    

    return (
        <PopupOverlay 
            className="popup-overlay"
            isPopupOpen={isPopupOpen}
            onClick={togglePopup}
        >
            <PopupOverlay.Container className="popup-content">
                <h2>
                    {chosenDate.day}. {new Date(chosenDate.year, chosenDate.month).toLocaleString('en-US', { month: 'long' })}  {chosenDate.year}.
                </h2>

                <FormContainer />
                <ScheduleTimeContainer />
            </PopupOverlay.Container>
        </PopupOverlay>
    )
}