export const getAppointmentsTime = (appointmentsArray) => {
    return appointmentsArray.map(booking => booking.appointment.time)
}