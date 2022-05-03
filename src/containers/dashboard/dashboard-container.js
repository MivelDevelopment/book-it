import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Routes, Route } from 'react-router-dom';

import { Btn, Dashboard } from '../../components';
import { UserAvailabilitySchedule } from './availability/user-availability-schedule';
import { AppointmentListContainer } from './appointment-list/appointment-list-container';
import { SingleAppointmentDetails } from './appointment-list/single-appointment-details';
import { MiniCalendar } from './mini-calendar';




export const DashboardContainer = () => {
    const [currentAppointmentShown, setCurrentAppointmentShown] = useState();
    const [appointmentId, setAppointmentId] = useState();

    return (
        <Dashboard>
            <Dashboard.Inner>
                <Dashboard.Column>
                    <Dashboard.InnerContents>
                        <h2>Your schedule</h2>
                        <AppointmentListContainer
                            currentAppointmentShown={currentAppointmentShown}
                            setCurrentAppointmentShown={setCurrentAppointmentShown}
                            appointmentId={appointmentId}
                            setAppointmentId={setAppointmentId}
                        />
                    </Dashboard.InnerContents>
                </Dashboard.Column>
                <Routes>
                    <Route path="/:appointmentId" element={<Dashboard.InnerContents>
                        <h2>Appointment details</h2>

                        {currentAppointmentShown &&
                            <SingleAppointmentDetails booking={currentAppointmentShown} />
                        }
                    </Dashboard.InnerContents>} />
                </Routes>

                <Dashboard.Column>
                    <Dashboard.InnerContents>
                        <h2>Set your availability</h2>
                        <Btn>
                            Set one by one
                        </Btn>
                        <Btn>
                            Set multiple at once
                        </Btn>
                    </Dashboard.InnerContents>
                </Dashboard.Column>


                {/* <Dashboard.Column>
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
                    {!openSchedule ? (
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
                                <SingleAppointmentDetails booking={currentAppointmentShown} />
                            }
                        </Dashboard.InnerContents>
                    )}

                </Dashboard.Column>
                <Dashboard.BackButtonContainer>
                    <Dashboard.BackButton onClick={() => navigate(-1)}>&#8592; Go back</Dashboard.BackButton>
                </Dashboard.BackButtonContainer> */}
            </Dashboard.Inner>

        </Dashboard>
    )
}