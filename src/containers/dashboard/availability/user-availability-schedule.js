import React from 'react';

import { Dashboard } from '../../../components';
import { AvailabilityContainer } from './availability-container';

export const UserAvailabilitySchedule = ({ currentDayShown }) => {

    return (

        <Dashboard.InnerContents>
            <h2>Set time intervals for</h2>
            <Dashboard.Subheading>
                {currentDayShown.day < 10 ? `0${currentDayShown.day}` : currentDayShown.day} / {currentDayShown.month + 1 < 10 ? `0${currentDayShown.month + 1}` : currentDayShown.month + 1} / {currentDayShown.year}
            </Dashboard.Subheading>

        </Dashboard.InnerContents >
    )
}