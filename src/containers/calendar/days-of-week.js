import React, { useEffect, useState } from 'react';
import { DayBox } from '../../components';

export const DaysOfWeek = ({ isMini }) => {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    useEffect(() => {
        const handleResize = () => {
            setDeviceWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [deviceWidth])

    return daysOfWeek.map(day => (
        <DayBox key={day} dayofweek>
            <DayBox.DayOfWeek isMini>{isMini || deviceWidth < 991 ? day.charAt(0) : day}</DayBox.DayOfWeek>
        </DayBox>))
}