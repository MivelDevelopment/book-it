export const setAppointment = ( appointmentInfo, setScheduledAppointments ) => {
    const { chosenTime, chosenDate, senderInfo } = appointmentInfo;
    setScheduledAppointments(appointments => [...appointments, {scheduler: {...senderInfo}, appointment: {...chosenDate, time: chosenTime}}])
}