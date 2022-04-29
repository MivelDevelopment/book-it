import React, { useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { AppointmentList } from '../../../components';
import { AppointmentListItem } from './appointment-list-item';
import { sortAppointmentsByTime } from '../../../helpers/sort-appointments-array-by-time';
import { sortAppointmentIdsIncrementaly } from '../../../helpers/sort-appointment-ids-incrementaly';
import { UserContext } from '../../../context';
import { getScheduleFromFirebase } from '../../../helpers/get-schedule-from-firebase';



export const AppointmentListContainer = ({ openSchedule, setOpenSchedule, currentAppointmentShown, setCurrentAppointmentShown }) => {
    const { signedInUser } = useContext(UserContext)
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortedAppointmentList, setSortedAppointmentList] = useState([]);


    const handleClick = (appointment) => {
        if (!openSchedule || !currentAppointmentShown.id || appointment.id !== currentAppointmentShown.id) {
            setCurrentAppointmentShown(appointment);
            setOpenSchedule(true);
        } else {
            setCurrentAppointmentShown(null);
            setOpenSchedule(false);
        }
    }

    const fetchData = async (userEmail) => {
        const data = await getScheduleFromFirebase(userEmail);
        setAppointments(data);
        setIsLoading(false);
        console.log('fetched')
    };

    useEffect(() => {
        if(isLoading) {
            fetchData(signedInUser);
        } else {
            let sortedIds = sortAppointmentIdsIncrementaly(appointments);
            let sortedAppointmentsArray = sortAppointmentsByTime(appointments, sortedIds);
            let sortedAppointmentsComponentsArray = sortedAppointmentsArray.map(appointment => {
                return <AppointmentListItem key={nanoid()} appointment={appointment} handleClick={handleClick} />
            });
            
            setSortedAppointmentList(sortedAppointmentsComponentsArray);
        }
    }, [signedInUser, isLoading, currentAppointmentShown]);


    return (
        <AppointmentList>
            {isLoading ? null : appointments.length < 1 ? 
                <AppointmentList.Subheading>
                    Your schedule is wide open!
                </AppointmentList.Subheading>
                :
                sortedAppointmentList
            }
        </AppointmentList>
    )
}