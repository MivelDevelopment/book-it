import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Dashboard } from '../components';
import { AppointmentListContainer } from '../containers/dashboard/appointment-list/appointment-list-container';
import { Btn } from '../components';


export const DashboardPage = ({ currentAppointmentShown, setCurrentAppointmentShown, isAppointmentOpen, setIsAppointmentOpen }) => {

    const navigate = useNavigate();

    return (
        <>
            <Routes>
                <Route exact path="/" element={
                    <Dashboard.Column>
                        <Dashboard.InnerContents>
                            <h2>Your schedule</h2>
                            <AppointmentListContainer
                                currentAppointmentShown={currentAppointmentShown}
                                setCurrentAppointmentShown={setCurrentAppointmentShown}
                                isAppointmentOpen={isAppointmentOpen}
                                setIsAppointmentOpen={setIsAppointmentOpen}
                            />
                        </Dashboard.InnerContents>
                    </Dashboard.Column>}
                />

                <Route exact path="/:appointmentId" element={
                    <Dashboard.Column>
                        <Dashboard.InnerContents>
                            <h2>Your schedule</h2>
                            <AppointmentListContainer
                                currentAppointmentShown={currentAppointmentShown}
                                setCurrentAppointmentShown={setCurrentAppointmentShown}
                                isAppointmentOpen={isAppointmentOpen}
                                setIsAppointmentOpen={setIsAppointmentOpen}
                            />
                        </Dashboard.InnerContents>
                    </Dashboard.Column>}
                />

            </Routes>

            <Routes>
                <Route exact path="/" element={
                    <Dashboard.Column>
                        <Dashboard.InnerContents>
                            <h2>Set your availability</h2>
                            <Btn style={{ marginBottom: 20 }} onClick={() => navigate('/set-appointment/single')}>
                                Set one by one
                            </Btn>
                            <Btn>
                                Set multiple at once
                            </Btn>
                        </Dashboard.InnerContents>
                    </Dashboard.Column>}
                />


            </Routes>
        </>
    )
}