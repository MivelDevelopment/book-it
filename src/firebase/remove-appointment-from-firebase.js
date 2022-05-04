import { db } from "./firebase-config"
import { doc, updateDoc, arrayRemove } from 'firebase/firestore';
import { getScheduleFromFirebase } from "./get-schedule-from-firebase";

export const removeAppointmentFromSchedule = async(appointmentId) => {
    const userScheduleRef = doc(db, 'schedule', 'jdp@gmail.com');

    try {
        const data = await getScheduleFromFirebase();
        const appointmentFoundById = data.find(appointment => appointment.id === appointmentId);
        
        if (!appointmentFoundById) {
            throw new Error('There is no such appointment in your schedule');
        }
        await updateDoc(userScheduleRef, {
            appointments: arrayRemove(appointmentFoundById)
        });
        console.log('done');
        
    } catch (error) {
        console.log(error.message);
    }
}