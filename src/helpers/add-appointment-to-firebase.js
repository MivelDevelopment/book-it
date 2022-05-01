// uzmem datum i vreme/na
// stavim u array
// poredjam podatke u objekat
// posaljem u firebase (append trenutnom array)

import { db } from '../firebase-config';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { getScheduleFromFirebase } from './get-schedule-from-firebase';

const initialAppointment = {
    id: "202204131100",
    day: 13,
    month: 4,
    year: 2022,
    time: '11:00',
    status: 'available'
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
