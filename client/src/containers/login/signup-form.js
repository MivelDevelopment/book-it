import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { InputForm } from '../../components';

const initialState = {
    fullName: '',
    userName: '',
    email: '',
    occupation: '',
    phoneNumber: '',
    availability: []
}

const setNewUser = async(senderInfo) => {
    try {
        const res = await axios('http://localhost:3333/users',{
            method: "POST",
            headers: {
                Accept: 'application/json'
            },
            data: senderInfo
        })
        console.log(res.data);
    } catch (error) {
        console.log(error)
    }
}

export const SignupForm = () => {
    const [senderInfo, setSenderInfo] = useState({...initialState});

    
    const handleChange = (e) => {
        let info = {...senderInfo};
        info[e.target.name] = e.target.value;
        setSenderInfo(info);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setNewUser(senderInfo);
        setSenderInfo(initialState);
    }

    useEffect(() => {
        console.log(senderInfo);
    }, [senderInfo])

    return (
        <InputForm onSubmit={handleSubmit}>
            <InputForm.InputContainer>
                <InputForm.Label htmlFor="user-fullName" >Your name</InputForm.Label>
                <InputForm.Input 
                    id="user-fullName" 
                    name="fullName"
                    required 
                    type="text"
                    value={senderInfo.fullName}
                    onChange={handleChange}
                />
            </InputForm.InputContainer>

            <InputForm.InputContainer>
                <InputForm.Label htmlFor="user-userName">Username</InputForm.Label>
                <InputForm.Input 
                    id="user-userName" 
                    name="userName"
                    required 
                    type="text"
                    value={senderInfo.userName}
                    onChange={handleChange}
                />
            </InputForm.InputContainer>

            <InputForm.InputContainer>
                <InputForm.Label htmlFor="user-email">Email address</InputForm.Label>
                <InputForm.Input 
                    id="user-email" 
                    name="email"
                    required 
                    type="email"
                    value={senderInfo.email}
                    onChange={handleChange}
                />
            </InputForm.InputContainer>

            <InputForm.InputContainer>
                <InputForm.Label htmlFor="user-occupation">Occupation</InputForm.Label>
                <InputForm.Input 
                    id="user-occupation" 
                    name="occupation"
                    required 
                    type="text"
                    value={senderInfo.occupation}
                    onChange={handleChange}
                />
            </InputForm.InputContainer>

            <InputForm.InputContainer>
                <InputForm.Label htmlFor="user-phone-number">Phone number (optional)</InputForm.Label>
                <InputForm.Input 
                    id="user-phone-number" 
                    name="phoneNumber"
                    value={senderInfo.phoneNumber}
                    onChange={handleChange}
                />
            </InputForm.InputContainer>

            <InputForm.InputContainer>
                <InputForm.SendBtn 
                    type="submit" 
                    disabled={!senderInfo.fullName || !senderInfo.userName || !senderInfo.email || !senderInfo.occupation}
                >Submit</InputForm.SendBtn>
            </InputForm.InputContainer>
        </InputForm>
    )
}