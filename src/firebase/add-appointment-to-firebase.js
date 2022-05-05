import { db } from '../firebase-config';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { getScheduleFromFirebase } from './get-schedule-from-firebase';

const initialAppointment = {
    id: "202204141200",
    day: 14,
    month: 4,
    year: 2022,
    time: '12:00',
    status: 'available',
    scheduler: {
        fullName: 'Brandon',
        email: 'letsgo@brandon.letsgo',
        phoneNumber: '67',
        message: "Let's go Brandon. LET'S GO!"
    }
};

export const addAppointmentToSchedule = async (dispatch, appointment = initialAppointment) => {

    const userScheduleRef = doc(db, 'schedule', 'jdp@gmail.com');

    try {
        const schedule = await getScheduleFromFirebase();

        const isAlreadySet = schedule.some(item => item.id === appointment.id);

        if (isAlreadySet) {
            console.log('not gonna happen boss-man');
            dispatch({ type: 'DISPLAY_ERROR', payload: 'You have already set an appointment at this time.' });
        } else {
            console.log('going to be set. 200 ok')
            await updateDoc(userScheduleRef, {
                appointments: arrayUnion(appointment)
            });
        }

    } catch (error) {
        console.log(error)
    }
}
