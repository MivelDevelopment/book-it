import React, { useContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

import { Form } from '../../components';
import { setNewUser } from '../../helpers/set-new-user';
import { AuthContext } from '../../context';

const initialState = {
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
};

// Divide database on user and another for appointments for that user

export const SignupForm = () => {
    const { setIsAuth } = useContext(AuthContext);
    const [senderInfo, setSenderInfo] = useState({ ...initialState });
    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection(db, 'users');
    const createUser = async () => {
        await addDoc(usersCollectionRef, senderInfo);
    };

    const auth = getAuth();

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getUsers();
    }, [])

    console.log(users);
    const handleChange = (e) => {
        let info = { ...senderInfo };
        info[e.target.name] = e.target.value;
        setSenderInfo(info);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setNewUser(senderInfo);
        // createUserWithEmailAndPassword(auth, senderInfo.email, senderInfo.password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log(userCredential);
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //     });
        createUser(senderInfo);
        setSenderInfo(initialState);
        setIsAuth(true);
        localStorage.setItem('isAuth', senderInfo.email);
    };

    useEffect(() => {
        console.log(users);
    }, [users]);

    console.log(users)
    return (
        <>
            <Form.Title>Sign up</Form.Title>

            <Form onSubmit={handleSubmit}>
                <Form.InputContainer>
                    <Form.Label htmlFor="user-fullName" >Your name</Form.Label>
                    <Form.Input
                        id="user-fullName"
                        name="fullName"
                        required
                        type="text"
                        value={senderInfo.fullName}
                        onChange={handleChange}
                    />
                </Form.InputContainer>

                <Form.InputContainer>
                    <Form.Label htmlFor="user-email">Email address</Form.Label>
                    <Form.Input
                        id="user-email"
                        name="email"
                        required
                        type="email"
                        value={senderInfo.email}
                        onChange={handleChange}
                    />
                </Form.InputContainer>

                <Form.InputContainer>
                    <Form.Label htmlFor="user-password">Password</Form.Label>
                    <Form.Input
                        id="user-password"
                        name="password"
                        required
                        type="password"
                        autoComplete="off"
                        value={senderInfo.password}
                        onChange={handleChange}
                    />
                </Form.InputContainer>

                <Form.InputContainer>
                    <Form.Label htmlFor="user-phone-number">Phone number (optional)</Form.Label>
                    <Form.Input
                        id="user-phone-number"
                        name="phoneNumber"
                        value={senderInfo.phoneNumber}
                        onChange={handleChange}
                    />
                </Form.InputContainer>

                <Form.InputContainer>
                    <Form.SendBtn
                        type="submit"
                        disabled={!senderInfo.fullName || !senderInfo.email}
                    >Submit</Form.SendBtn>
                </Form.InputContainer>

                <Form.Text>Already registered? <Form.Link to="/login"><u>Click here to log in.</u></Form.Link></Form.Text>
            </Form>
        </>
    );
};