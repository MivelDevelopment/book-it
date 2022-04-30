export const populateSchedule = (start = 8, end = 16, interval = 30, breakMinutes = 15) => {
    const convertedStartHourToMinutes = start * 60 - interval;
    const convertedEndHourToMinutes = end * 60;
    const myInterval = interval !== 0 ? interval : 60;

    const recursiveScheduler = (start, end, interval, breakInterval) => {
        if (start + interval >= end) {
            return []
        } else {

            const timestamps = recursiveScheduler(start + interval + breakInterval, end, interval, breakInterval);

            let startHourStamp = Math.floor((start + interval) / 60);
            if (startHourStamp.toString().length < 2) startHourStamp = '0' + startHourStamp;
            let startMinuteStamp = (start + interval) % 60;

            let endHourStamp = Math.floor((start + interval * 2) / 60);
            if (endHourStamp.toString().length < 2) endHourStamp = '0' + endHourStamp;
            let endMinuteStamp = (start + interval * 2) % 60;

            if (startMinuteStamp < 10 && startMinuteStamp !== 0) startMinuteStamp = '0' + startMinuteStamp;
            if (startMinuteStamp === 0) startMinuteStamp += '0';

            if (endMinuteStamp < 10 && endMinuteStamp !== 0) endMinuteStamp = '0' + endMinuteStamp;
            if (endMinuteStamp === 0) endMinuteStamp += '0';

            if (start + interval * 2 <= end) timestamps.unshift(`${startHourStamp}:${startMinuteStamp}-${endHourStamp}:${endMinuteStamp}`);

            return timestamps;
        }
    }
    return recursiveScheduler(convertedStartHourToMinutes, convertedEndHourToMinutes, myInterval, breakMinutes);
}