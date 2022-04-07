import React from 'react';

import { Dashboard } from '../../components';

export const DashboardContainer = () => {

    return (
        <Dashboard>
            <Dashboard.Inner>
                <Dashboard.Column>
                    <Dashboard.Title>Your schedule</Dashboard.Title>
                </Dashboard.Column>
                <Dashboard.Column>
                    <Dashboard.Title>Set your availability</Dashboard.Title>
                </Dashboard.Column>
            </Dashboard.Inner>
        </Dashboard>
    )
}