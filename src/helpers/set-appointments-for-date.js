export const setAppointment = ( appointmentInfo, setScheduledAppointments ) => {
    const { chosenTime, chosenDate, senderInfo } = appointmentInfo;
    setScheduledAppointments(appointments => [...appointments, {
        scheduler: {...senderInfo}, 
        appointment: {...chosenDate, time: chosenTime}, 
        id:`${chosenDate.year}${
            chosenDate.month.toString().length < 2 
            ? '0'+chosenDate.month.toString() 
            : chosenDate.month}${chosenDate.day.toString().length < 2
            ? '0'+chosenDate.day.toString()
            : chosenDate.day}${chosenTime.split(':').join('')}`
    }])
}