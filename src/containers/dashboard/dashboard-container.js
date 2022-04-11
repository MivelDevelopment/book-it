import React, { useState } from 'react';

import { Dashboard } from '../../components';
import { AppointmentListContainer } from './appointment-list/appointment-list-container';
import { SingleAppointmentDetails } from './appointment-list/single-appointment-details';


export const DashboardContainer = () => {

    const [openSchedule, setOpenSchedule] = useState(false);
    const [openAvailability, setOpenAvailability] = useState(false);
    const [leftClicked, setLeftClicked] = useState(false);
    const [currentAppointmentShown, setCurrentAppointmentShown] = useState('');

    return (
        <Dashboard>
            <Dashboard.Inner>
                <Dashboard.Column>
                <Dashboard.InnerContents 
                    left 
                    openSchedule={openSchedule} 
                >
                    <Dashboard.Title>Your schedule</Dashboard.Title>
                    <AppointmentListContainer 
                        openSchedule={openSchedule} 
                        setOpenSchedule={setOpenSchedule} 
                        currentAppointmentShown={currentAppointmentShown}
                        setCurrentAppointmentShown={setCurrentAppointmentShown}
                        onClick={() => setLeftClicked(true)}
                    />
                </Dashboard.InnerContents>
                </Dashboard.Column>
                
                <Dashboard.Column>
                    <Dashboard.InnerContents 
                        right 
                        leftClicked 
                        openSchedule={openSchedule}
                    >
                        <Dashboard.Title>Set your availability</Dashboard.Title>
                    </Dashboard.InnerContents>
                
                    <Dashboard.InnerContents 
                        right 
                        leftClicked 
                        openSchedule={!openSchedule}
                    >
                        <Dashboard.Title>Appointment details</Dashboard.Title>
                        
                        {currentAppointmentShown && 
                            <SingleAppointmentDetails booking={currentAppointmentShown}/>
                        }
                    </Dashboard.InnerContents>
                </Dashboard.Column>
            </Dashboard.Inner>
        </Dashboard>
    )
}