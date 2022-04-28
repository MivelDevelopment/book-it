export const setAppointment = ( appointmentInfo, setScheduledAppointments ) => {
    const { chosenTime, chosenDate, senderInfo } = appointmentInfo;
    const year = chosenDate.year;
    const month = chosenDate.month.toString().length < 2 ? `0${chosenDate.month.toString()}` : chosenDate.month;
    const day = chosenDate.day.toString().length < 2 ? `0${chosenDate.day.toString()}` : chosenDate.day;
    const time = chosenTime.replace(':', '');

    setScheduledAppointments(appointments => [...appointments, {
        scheduler: {...senderInfo}, 
        appointment: {...chosenDate, time: chosenTime}, 
        id:`${year}${month}${day}${time}`
    }])
}