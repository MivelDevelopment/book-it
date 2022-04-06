import React, { useState, useEffect } from 'react';

import { InputForm } from "../components";
import { setAppointment } from '../helpers/set-appointments-for-date';

export const FormContainer = ({ chosenTime, setChosenTime, chosenDate, scheduledAppointments, setScheduledAppointments }) => {
    const [senderInfo, setSenderInfo] = useState({name: '', email: '', number: '', message: '' })
    const [disableSubmit, setDisableSubmit] = useState(true);

    const handleChange = (e) => {
        let info = {...senderInfo};
        info[e.target.name] = e.target.value;
        setSenderInfo(info);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setAppointment({chosenTime, chosenDate, senderInfo}, setScheduledAppointments);
        setSenderInfo({name: '', email: '', number: '', message: '' });
        setChosenTime('');
        
        /**TODO continue from here
         * Check if there is and appointment in schedule
         */
    }

    useEffect(() => {
        setDisableSubmit(!chosenTime || !senderInfo.name || !senderInfo.email);
    }, [chosenTime, senderInfo.name, senderInfo.email]);

    return (
        <InputForm onSubmit={submitForm}>

            <InputForm.InputContainer>
                <InputForm.Label htmlFor="booker-name" >Your name</InputForm.Label>
                <InputForm.Input 
                    id="booker-name" 
                    name="name"
                    required 
                    type="text"
                    value={senderInfo.name}
                    onChange={handleChange}
                />
            </InputForm.InputContainer>

            <InputForm.InputContainer>
                <InputForm.Label htmlFor="booker-email">Email address</InputForm.Label>
                <InputForm.Input 
                    id="booker-email" 
                    name="email"
                    required 
                    type="email"
                    value={senderInfo.email}
                    onChange={handleChange}
                />
            </InputForm.InputContainer>

            <InputForm.InputContainer>
                <InputForm.Label htmlFor="booker-phone-number">Phone number (optional)</InputForm.Label>
                <InputForm.Input 
                    id="booker-phone-number" 
                    name="number"
                    value={senderInfo.number}
                    onChange={handleChange}
                />
            </InputForm.InputContainer>

            <InputForm.InputContainer>
                <InputForm.Label htmlFor="booker-message">Message (optional)</InputForm.Label>
                <InputForm.Message 
                    id="booker-message"
                    name="message"
                    value={senderInfo.message}
                    onChange={handleChange}
                ></InputForm.Message>
            </InputForm.InputContainer>

            <InputForm.InputContainer>
                <InputForm.SendBtn type="submit" disabled={disableSubmit}>Submit</InputForm.SendBtn>
            </InputForm.InputContainer>

        </InputForm>
    )
}


// InputContainer
// Label
// Input