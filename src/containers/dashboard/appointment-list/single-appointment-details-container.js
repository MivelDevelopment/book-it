import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAppointmentById } from '../../../firebase/get-appointment-by-id';
import { removeAppointmentFromSchedule } from '../../../firebase/remove-appointment-from-firebase';
import { SingleAppointmentDetailsRender } from './single-appointment-details-render';

export const SingleAppointmentDetailsContainer = ({ setIsAppointmentOpen, handleBack }) => {
    const [booking, setBooking] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    let {appointmentId} = useParams();

    const { year, time } = booking;
    const day = booking?.day < 10 ? `0${booking?.day}` : booking?.day;
    const month = booking?.month + 1 < 10 ? `0${booking?.month + 1}` : booking?.month + 1;

    
    const fetchData = async (appointmentId) => {
        try {
            const data = await getAppointmentById(appointmentId);
            if (!data) {
                setIsLoading(false);
                throw new Error('Appointment not found');
            }
            setBooking(data);
            setIsLoading(false);
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        if (isLoading || appointmentId !== booking.id) {
            fetchData(appointmentId);
        }
    }, [isLoading, appointmentId, booking.id]);

    useEffect(() => {
        if (appointmentId) {
            setIsAppointmentOpen(true);
        }
    }, [setIsAppointmentOpen, appointmentId])

    const handleRemove = () => {
        removeAppointmentFromSchedule(booking.id);
        handleBack();
    }
    return (
        <>
        {isLoading 
            ? <h3>Loading...</h3> 
            : error 
                ? <h3>{error}</h3>
                : booking && <SingleAppointmentDetailsRender 
                    booking={booking} 
                    date={{day, month, year}} 
                    time={time} 
                    handleRemove={handleRemove} 
                />
        }
        </>
    )
}