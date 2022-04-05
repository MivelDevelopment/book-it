export const populateSchedule = (start = 8, end = 16, interval = 30) => {
    const convertedStartHourToMinutes = start * 60;
    const convertedEndHourToMinutes = end * 60;
    const myInterval = interval !== 0 ? interval : 60;
    
    const recursiveScheduler = (start, end, interval) => {
        if ( start > end ) {
            return [`${Math.floor(start / 60)}:00`]
        } else {
            const timestamps = recursiveScheduler(start, end - interval, interval);
            
            let hourStamp = Math.floor(( end + interval ) / 60)
            let minuteStamp = ( end + interval ) % 60;

            if (minuteStamp < 10 && minuteStamp !== 0) minuteStamp = '0' + minuteStamp
            if (minuteStamp === 0) minuteStamp += '0';

            timestamps.push(`${hourStamp}:${minuteStamp}`)
            return timestamps;
        }
    }
    
    return recursiveScheduler(convertedStartHourToMinutes, convertedEndHourToMinutes, myInterval).slice(0, -1);    
}