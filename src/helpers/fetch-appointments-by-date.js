import axios from 'axios';

export const fetchAppointmentsByDate = async(userEmail, {day, month, year}) => {
    localStorage.setItem('isAuth', 'johndoe@gmail.com');
    
    if (localStorage.getItem('isAuth') !== userEmail) {
        localStorage.removeItem('isAuth');
        throw `There's been a authentication missmatch, please log in again`;
    }
    
    try {
        const response = await axios.get(`http://localhost:3333/schedule/`);
        const data = await response.data;
        if (data[userEmail][year][month][day] ) {
            console.log(data?.[userEmail]?.[year]?.[month]?.[day]);
            return data?.[userEmail]?.[year]?.[month]?.[day];
        } else {
            console.log('No appointments made for this date.');
            return []
        };
        
    } catch (error) {
        console.log(error.response);
    }
    
}