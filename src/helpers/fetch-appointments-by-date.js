import { getScheduleFromFirebase } from "../firebase/get-schedule-from-firebase";

export const fetchAppointmentsByDate = async (userEmail) => {
    localStorage.setItem('isAuth', 'jdp@gmail.com');

    if (localStorage.getItem('isAuth') !== userEmail) {
        localStorage.removeItem('isAuth');
        alert(`There's been a authentication missmatch, you need to log in again`);
        window.location.href = './login';
        return;
    }

    try {
        const data = await getScheduleFromFirebase(userEmail);

        if (data) {
            return data;
        } else {
            return []
        };
    } catch (error) {
        console.log(error);
    }

}