export const compareAppointments = (scheduledAppointments, chosendDate, time) => {
    scheduledAppointments.some(booking => booking.day === chosendDate.day 
                                        && booking.month === chosendDate.month
                                        && booking.year === chosendDate.year
                                        && booking.time === time);
    return scheduledAppointments
}