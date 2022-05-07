import React from 'react';
import { Dashboard } from '../../components';
import { SingleAppointmentDetailsContainer } from '../../containers/dashboard/appointment-list/single-appointment-details-container';

export const SingleAppointmentPage = ({ currentAppointmentShown, setIsAppointmentOpen, handleBack }) => {

    return (
        <>
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