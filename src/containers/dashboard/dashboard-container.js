import React, { useState } from 'react';

import { Dashboard } from '../../components';
import { UserAvailabilitySchedule } from './availability/user-availability-schedule';
import { AppointmentListContainer } from './appointment-list/appointment-list-container';
import { SingleAppointmentDetails } from './appointment-list/single-appointment-details';
import { MiniCalendar } from './mini-calendar';




export const DashboardContainer = () => {

    const [openAvailability, setOpenAvailability] = useState(false);
    const [currentDayShown, setCurrentDayShown] = useState('');
    const [openSchedule, setOpenSchedule] = useState(false);
    const [currentAppointmentShown, setCurrentAppointmentShown] = useState(null);

    return (
        <Dashboard>
            <Dashboard.Inner>
                <Dashboard.Column>
                {!openAvailability ? (
                    <Dashboard.InnerContents>
                        <h2>Your schedule</h2>
                        
                        <AppointmentListContainer 
                            openSchedule={openSchedule} 
                            setOpenSchedule={setOpenSchedule} 
                            currentAppointmentShown={currentAppointmentShown}
                            setCurrentAppointmentShown={setCurrentAppointmentShown}
                        />
                    </Dashboard.InnerContents>) : (
                    <UserAvailabilitySchedule currentDayShown={currentDayShown} />
                )}

                </Dashboard.Column>
                
                <Dashboard.Column>
                    { !openSchedule ? (
                        <Dashboard.InnerContents>
                            <h2>Set your availability</h2>

                            <MiniCalendar 
                                openAvailability={openAvailability} 
                                setOpenAvailability={setOpenAvailability} 
                                currentDayShown={currentDayShown}
                                setCurrentDayShown={setCurrentDayShown}
                            />

                        </Dashboard.InnerContents>) : (
                        <Dashboard.InnerContents>
                            <h2>Appointment details</h2>
                            
                            {currentAppointmentShown && 
                                <SingleAppointmentDetails booking={currentAppointmentShown}/>
                            }
                        </Dashboard.InnerContents>
                    )}
                
                </Dashboard.Column>
            </Dashboard.Inner>
        </Dashboard>
    )
}