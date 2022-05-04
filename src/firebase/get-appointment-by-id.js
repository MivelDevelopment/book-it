import { getScheduleFromFirebase } from './get-schedule-from-firebase';

export const getAppointmentById = async (appointmentId) => {
    const appointmentsArray = await getScheduleFromFirebase('jdp@gmail.com');
    return appointmentsArray.find(appointment => appointment.id === appointmentId);
}
