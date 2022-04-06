export const getAppointments = (chosenDate, scheduledAppointments) => {
    const allAppointmentsForThisDay = scheduledAppointments.filter(booking => (
        booking.appointment.day === chosenDate.day && 
        booking.appointment.month === chosenDate.month && 
        booking.appointment.year === chosenDate.year
    ))

    return allAppointmentsForThisDay
}