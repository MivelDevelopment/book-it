import React, { useContext, useEffect, useState } from 'react';

import { AppointmentList } from '../../../components';
import { AppointmentListItem } from './appointment-list-item';
import { mergeSort } from '../../../helpers/sort-from-lowest';
import { UserContext } from '../../../context';
import { getScheduleFromFirebase } from '../../../helpers/get-schedule-from-firebase';



export const AppointmentListContainer = ({ openSchedule, setOpenSchedule, currentAppointmentShown, setCurrentAppointmentShown }) => {
    const { signedInUser } = useContext(UserContext)
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let arr = [];

    const handleClick = (booking) => {
        if (!openSchedule || booking.id !== currentAppointmentShown.id) {
            setCurrentAppointmentShown(booking);
            setOpenSchedule(true);
        } else {
            setOpenSchedule(false);
        }
    }

    // let sortedIds = arr.reduce((acc, curr) => mergeSort([...acc, curr.id]), [])

    // let sortedAppointmentsArray = sortedIds.map(id => scheduledAppointments.find(item => item.id === id));

    // let sortedAppointmentList = sortedAppointmentsArray.map(booking => {
    //     const { appointment } = booking;
    //     return (
    //         <AppointmentListItem
    //             key={`${appointment.day}${appointment.month}${appointment.year}${appointment.time}`}
    //             booking={booking}
    //             handleClick={() => handleClick(booking)}
    //         />
    //     )
    // })
    useEffect(() => {
        const fetchData = async () => {
            const data = await getScheduleFromFirebase(signedInUser);
            setAppointments(data);
            setIsLoading(false);
        }
        fetchData();
    }, [])

    useEffect(() => {

        if (!isLoading) {
            for (let year in appointments) {
                for (let month in appointments[year]) {
                    for (let day in appointments[year][month]) {
                        arr.push(...[...appointments[year][month][day]]);
                        console.log(arr);
                    }
                }
            }
        }
        setAppointments(arr);
    }, [isLoading]);

    console.log(appointments);

    return (
        <AppointmentList>
            {/* {scheduledAppointments.length < 1 ?
                <AppointmentList.Subheading>
                    Your schedule is wide open!
                </AppointmentList.Subheading>
                :
                sortedAppointmentList
            } */}
        </AppointmentList>
    )
}