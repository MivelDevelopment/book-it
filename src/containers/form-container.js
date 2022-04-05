import React, { useState } from 'react';

import { InputForm } from "../components";
import { setAppointment } from '../helpers/set-appointments-for-date';

export const FormContainer = ({ chosenTime, chosenDate, setScheduledAppointments, scheduledAppointments }) => {
    const [senderInfo, setSenderInfo] = useState({name: '', email: '', number: '', message: '' })

    const handleChange = (e) => {
        let info = {...senderInfo};
        info[e.target.name] = e.target.value;
        setSenderInfo(info);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setSenderInfo({name: '', email: '', number: '', message: '' });
        setAppointment({chosenTime, chosenDate, senderInfo}, setScheduledAppointments);
        console.log(scheduledAppointments)
        
        /**TODO continue from here
         * Check if there is and appointment in schedule
         */
    }

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
                <InputForm.SendBtn type="submit" disabled={!chosenTime || !senderInfo.name || !senderInfo.email}>Submit</InputForm.SendBtn>
            </InputForm.InputContainer>

        </InputForm>
    )
}


// InputContainer
// Label
// Input