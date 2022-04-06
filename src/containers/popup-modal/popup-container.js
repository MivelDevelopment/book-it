import React, { useContext } from 'react';
import { PopupOverlay } from "../../components";
import { FormContainer } from './form-container';
import { ScheduleTimeContainer } from './schedule/schedule-time-container';

import { 
    ChosenDateContext,
    ChosenTimeContext, 
    PopupContext} from '../../context'; 


export const PopupContainer = () => {    
    const { chosenDate } = useContext(ChosenDateContext);
    const { isPopupOpen, togglePopup} = useContext(PopupContext);
    const { chosenTime } = useContext(ChosenTimeContext);

    return (
        <PopupOverlay 
            className="popup-overlay"
            isPopupOpen={isPopupOpen}
            onClick={togglePopup} 
        >  
            <PopupOverlay.Container className="popup-content">
                <PopupOverlay.TimeAndDate>
                    <p className="date-label">
                        {chosenDate.day}. {new Date(chosenDate.year, chosenDate.month).toLocaleString('en-US', { month: 'long' })}  {chosenDate.year}.
                    </p>
                    <p className="time-label">
                        {chosenTime ? chosenTime : "Select an appointment"}
                    </p>
                </PopupOverlay.TimeAndDate>
                    <FormContainer />
                    <ScheduleTimeContainer />
            </PopupOverlay.Container>
        </PopupOverlay>
    )
}