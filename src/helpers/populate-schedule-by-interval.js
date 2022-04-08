export const populateSchedule = (start = 8, end = 16, interval = 30) => {
    const convertedStartHourToMinutes = start * 60;
    const convertedEndHourToMinutes = end * 60;
    const myInterval = interval !== 0 ? interval : 60;
    
    const recursiveScheduler = (start, end, interval) => {
        if ( start > end ) {
            return [`${Math.floor(start / 60).toString().length < 2 
                ? '0' + Math.floor(start / 60).toString() 
                : Math.floor(start / 60).toString() }:00`]
        } else {
            const timestamps = recursiveScheduler(start, end - interval, interval);
            
            let hourStamp = Math.floor(( end + interval ) / 60);
            if (hourStamp.toString().length < 2) hourStamp = '0' + hourStamp;
            let minuteStamp = ( end + interval ) % 60;

            if (minuteStamp < 10 && minuteStamp !== 0) minuteStamp = '0' + minuteStamp;
            if (minuteStamp === 0) minuteStamp += '0';

            timestamps.push(`${hourStamp}:${minuteStamp}`);
            return timestamps;
        }
    }
    
    return recursiveScheduler(convertedStartHourToMinutes, convertedEndHourToMinutes, myInterval).slice(0, -1);    
}