import React from 'react';

import { PopupOverlay } from "../components";
import { ChosenTimeContextConsumer } from '../context/chosen-time-context';
import { ScheduledAppointmentsConsumer } from '../context/scheduled-appointments-context';
import { FormContainer } from './form-container';
import { ScheduleTimeContainer } from './schedule-time-container';

export const PopupContainer = ({ chosenDate, isPopupOpen, togglePopup }) => {    

    return (
        <PopupOverlay 
            className="popup-overlay"
            isPopupOpen={isPopupOpen}
            onClick={togglePopup}
        >  
            <ChosenTimeContextConsumer>
            {({ chosenTime, setChosenTime }) => (
            <PopupOverlay.Container className="popup-content">
                <PopupOverlay.TimeAndDate>
                    <p className="date-label">
                        {chosenDate.day}. {new Date(chosenDate.year, chosenDate.month).toLocaleString('en-US', { month: 'long' })}  {chosenDate.year}.
                    </p>
                    <p className="time-label">
                        {chosenTime ? chosenTime : "Select an appointment"}
                    </p>
                </PopupOverlay.TimeAndDate>

                <ScheduledAppointmentsConsumer>
                    {({scheduledAppointments, setScheduledAppointments}) => (
                    <>
                        <FormContainer chosenTime={chosenTime} setChosenTime={setChosenTime} chosenDate={chosenDate} scheduledAppointments={scheduledAppointments} setScheduledAppointments={setScheduledAppointments}/>
                        <ScheduleTimeContainer setChosenTime={setChosenTime} chosenDate={chosenDate} scheduledAppointments={scheduledAppointments} />
                    </>
                    )}
                </ScheduledAppointmentsConsumer>
            </PopupOverlay.Container>
            )}
            </ChosenTimeContextConsumer>
        </PopupOverlay>
    )
}