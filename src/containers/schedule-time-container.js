import React from 'react';
import { ScheduleTime } from '../components';

import { populateSchedule } from '../helpers/populate-schedule-by-interval';

export const ScheduleTimeContainer = () => {    
    const timeIntervals = populateSchedule(10, 20, 30).map(time => (
        <ScheduleTime.Inner key={time}>
            <ScheduleTime.Timestamp>
                {time}
            </ScheduleTime.Timestamp>
        </ScheduleTime.Inner>
    ))

    return (
        <ScheduleTime>
            {timeIntervals}
        </ScheduleTime>
    )


}