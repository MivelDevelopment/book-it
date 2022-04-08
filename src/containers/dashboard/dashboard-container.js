import React from 'react';

import { Dashboard } from '../../components';
import { AppointmentListContainer } from './appointment-list/appointment-list-container';

export const DashboardContainer = () => {

    return (
        <Dashboard>
            <Dashboard.Inner>
                <Dashboard.Column>
                    <Dashboard.Title>Your schedule</Dashboard.Title>
                    <AppointmentListContainer />
                </Dashboard.Column>
                <Dashboard.Column>
                    <Dashboard.Title>Set your availability</Dashboard.Title>
                </Dashboard.Column>
            </Dashboard.Inner>
        </Dashboard>
    )
}