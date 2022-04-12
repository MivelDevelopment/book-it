import React from 'react';
import { DayBox } from '../../components';

export const DaysOfWeek = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return daysOfWeek.map(day => (
        <DayBox key={day}>
            <DayBox.DayOfWeek>{day}</DayBox.DayOfWeek>
        </DayBox> 
    ))
}