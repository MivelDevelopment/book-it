import React, { useState, useEffect, useContext } from 'react';

import { Form } from "../../components";
import { setAppointment } from '../../helpers/set-appointments-for-date';

import {
    ChosenDateContext,
    ChosenTimeContext,
    ScheduledAppointmentsContext
} from '../../context';


export const FormContainer = () => {
    const { chosenDate } = useContext(ChosenDateContext);
    const { chosenTime, setChosenTime } = useContext(ChosenTimeContext);
    const { scheduledAppointments, setScheduledAppointments } = useContext(ScheduledAppointmentsContext);

    const [senderInfo, setSenderInfo] = useState({ fullName: '', email: '', number: '', message: '' })
    const [disableSubmit, setDisableSubmit] = useState(true);

    const handleChange = (e) => {
        let info = { ...senderInfo };
        info[e.target.name] = e.target.value;
        setSenderInfo(info);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setAppointment({ chosenTime, chosenDate, senderInfo }, setScheduledAppointments);

        setSenderInfo({ fullName: '', email: '', number: '', message: '' });
        setChosenTime('');
        console.log(scheduledAppointments)
    }

    useEffect(() => {
        setDisableSubmit(!chosenTime || !senderInfo.fullName || !senderInfo.email);
    }, [chosenTime, senderInfo.fullName, senderInfo.email]);

    return (
        <Form onSubmit={submitForm}>

            <Form.InputContainer>
                <Form.Label htmlFor="booker-name" >Your name</Form.Label>
                <Form.Input
                    id="booker-name"
                    name="fullName"
                    required
                    type="text"
                    value={senderInfo.fullName}
                    onChange={handleChange}
                />
            </Form.InputContainer>

            <Form.InputContainer>
                <Form.Label htmlFor="booker-email">Email address</Form.Label>
                <Form.Input
                    id="booker-email"
                    name="email"
                    required
                    type="email"
                    value={senderInfo.email}
                    onChange={handleChange}
                />
            </Form.InputContainer>

            <Form.InputContainer>
                <Form.Label htmlFor="booker-phone-number">Phone number (optional)</Form.Label>
                <Form.Input
                    id="booker-phone-number"
                    name="number"
                    value={senderInfo.number}
                    onChange={handleChange}
                />
            </Form.InputContainer>

            <Form.InputContainer>
                <Form.Label htmlFor="booker-message">Message (optional)</Form.Label>
                <Form.Message
                    id="booker-message"
                    name="message"
                    value={senderInfo.message}
                    onChange={handleChange}
                ></Form.Message>
            </Form.InputContainer>

            <Form.InputContainer>
                <Form.SendBtn type="submit" disabled={disableSubmit}>Submit</Form.SendBtn>
            </Form.InputContainer>

        </Form>
    )
}


// InputContainer
// Label
// Input