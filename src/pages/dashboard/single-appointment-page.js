import React from 'react';
import { Dashboard } from '../../components';
import { SingleAppointmentDetailsContainer } from '../../containers/dashboard/appointment-list/single-appointment-details-container';
import { AppointmentListContainer } from '../../containers/dashboard/appointment-list/appointment-list-container';

export const SingleAppointmentPage = ({ currentAppointmentShown, setCurrentAppointmentShown, isAppointmentOpen, setIsAppointmentOpen, handleBack }) => {

    return (
        <>
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
            </Dashboard.Column>
            <Dashboard.Column>
                <Dashboard.InnerContents>
                    {currentAppointmentShown.status === 'available'
                        ? <h2>Available time</h2>
                        : <h2>Appointment details</h2>
                    }

                    {currentAppointmentShown &&
                        <SingleAppointmentDetailsContainer setIsAppointmentOpen={setIsAppointmentOpen} handleBack={handleBack} />
                    }
                </Dashboard.InnerContents>
            </Dashboard.Column>
        </>
    )
}