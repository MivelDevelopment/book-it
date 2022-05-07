import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Btn, Dashboard } from '../../components';
import { UserAvailabilitySchedule } from './availability/user-availability-schedule';
import { AppointmentListContainer } from './appointment-list/appointment-list-container';
import { SingleAppointmentDetailsContainer } from './appointment-list/single-appointment-details-container';
import { MiniCalendar } from './mini-calendar';
import { SingleAppointmentPage } from '../../pages/dashboard/single-appointment-page';
import { DashboardPage } from '../../pages/dashboard';




export const DashboardContainer = () => {
    const [currentAppointmentShown, setCurrentAppointmentShown] = useState({});
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
    const [isOpenCalendar, setIsOpenCalendar] = useState(false);

    const navigate = useNavigate();

    const handleBack = () => {
        setCurrentAppointmentShown({});
        setIsAppointmentOpen(false);
        navigate('/dashboard');
    }

    return (
        <Dashboard>
            <Dashboard.Inner>
                <DashboardPage
                    currentAppointmentShown={currentAppointmentShown}
                    setCurrentAppointmentShown={setCurrentAppointmentShown}
                    isAppointmentOpen={isAppointmentOpen}
                    setIsAppointmentOpen={setIsAppointmentOpen}
                />

                <Routes>
                    <Route exact path="/:appointmentId" element={
                        <SingleAppointmentPage
                            currentAppointmentShown={currentAppointmentShown}
                            setIsAppointmentOpen={setIsAppointmentOpen}
                            handleBack={handleBack}
                        />}
                    />
                </Routes>

                <Routes>
                    <Route exact path="/set-appointments" element={
                        <Dashboard.Column>
                            <Dashboard.InnerContents>
                                <h2>Set your availability</h2>
                                <Btn style={{ marginBottom: 20 }}>
                                    Set one by one
                                </Btn>
                                <Btn>
                                    Set multiple at once
                                </Btn>
                            </Dashboard.InnerContents>
                        </Dashboard.Column>
                    } />

                </Routes>

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

                </Dashboard.Column>*/}
                {isAppointmentOpen &&
                    <Dashboard.BackButtonContainer>
                        <Dashboard.BackButton onClick={handleBack}>&#8592; Go back</Dashboard.BackButton>
                    </Dashboard.BackButtonContainer>
                }
            </Dashboard.Inner>

        </Dashboard >
    )
}