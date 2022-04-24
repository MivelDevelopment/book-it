import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { InputForm } from '../../components';
import { auth, provider } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../context/auth-context';

const initialState = {
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    availability: []
};

const setNewUser = async (senderInfo) => {
    try {
        const res = await axios('http://localhost:3333/users', {
            method: "POST",
            headers: {
                Accept: 'application/json'
            },
            data: senderInfo
        })
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

// Divide database on user and another for appointments for that user

export const SignupForm = () => {
    const { setIsAuth } = useContext(AuthContext);
    const [senderInfo, setSenderInfo] = useState({ ...initialState });

    const handleChange = (e) => {
        let info = { ...senderInfo };
        info[e.target.name] = e.target.value;
        setSenderInfo(info);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setNewUser(senderInfo);
        signInWithEmailAndPassword(auth, senderInfo.email, senderInfo.password)
            .then((senderInfo) => {
                const user = senderInfo.user;
                localStorage.setItem('isAuth', true);
                setIsAuth(true);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        setSenderInfo(initialState);
    };

    useEffect(() => {
        console.log(senderInfo);
    }, [senderInfo]);

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
                <InputForm.Label htmlFor="user-password">Password</InputForm.Label>
                <InputForm.Input
                    id="user-password"
                    name="password"
                    required
                    type="password"
                    autocomplete="off"
                    value={senderInfo.password}
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
                    disabled={!senderInfo.fullName || !senderInfo.email}
                >Submit</InputForm.SendBtn>
            </InputForm.InputContainer>
        </InputForm>
    );
};