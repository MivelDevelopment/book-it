import React, { useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { AppointmentList } from '../../../components';
import { AppointmentListItem } from './appointment-list-item';
import { sortAppointmentsByTime } from '../../../helpers/sort-appointments-array-by-time';
import { sortAppointmentIdsIncrementaly } from '../../../helpers/sort-appointment-ids-incrementaly';
import { UserContext } from '../../../context';
import { getScheduleFromFirebase } from '../../../firebase/get-schedule-from-firebase';
import { useNavigate } from 'react-router-dom';


export const AppointmentListContainer = ({ currentAppointmentShown, setCurrentAppointmentShown, isAppointmentOpen, setIsAppointmentOpen }) => {
    const { signedInUser } = useContext(UserContext);
    const [appointmentsList, setAppointmentsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortedAppointmentList, setSortedAppointmentList] = useState([]);

    const navigate = useNavigate();

    const handleClick = (appointment) => {
        const isDifferentAppointment = appointment.id !== currentAppointmentShown.id
        const noPreviousAppointmentShown = !currentAppointmentShown.id

        if (isDifferentAppointment || noPreviousAppointmentShown) {
            setCurrentAppointmentShown(appointment);
            setIsAppointmentOpen(true);
            navigate(`/dashboard/${appointment.id}`);
        } else {
            setCurrentAppointmentShown({});
            setIsAppointmentOpen(false);
            navigate(`/dashboard`);
        }
    }

    const fetchData = async (userEmail) => {
        const data = await getScheduleFromFirebase(userEmail);
        setAppointmentsList(data);
        setIsLoading(false);
    };

    useEffect(() => {
        if (isLoading) {
            fetchData(signedInUser);
        } else {
            let sortedIds = sortAppointmentIdsIncrementaly(appointmentsList);
            let sortedAppointmentsArray = sortAppointmentsByTime(appointmentsList, sortedIds);
            let sortedAppointmentsComponentsArray = sortedAppointmentsArray.map(appointment => {
                return <AppointmentListItem key={nanoid()} appointment={appointment} handleClick={handleClick} />
            });

            setSortedAppointmentList(sortedAppointmentsComponentsArray);
        }
    }, [signedInUser, isLoading, isAppointmentOpen, currentAppointmentShown]);

    return (
        <AppointmentList>
            {isLoading ? null : appointmentsList.length < 1 ?
                <AppointmentList.Subheading>
                    Your schedule is wide open!
                </AppointmentList.Subheading>
                :
                sortedAppointmentList
            }
        </AppointmentList>
    )
}