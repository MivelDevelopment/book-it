import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, UserContext } from '../../context';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../../firebase-config';
import { LoginForm } from './login-form';

const auth = getAuth();

export const LoginContainer = () => {
    const { setSignedInUser } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { setIsAuth } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsAuth(true);
                setSignedInUser(email);
                localStorage.setItem('isAuth', email);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
        });
        
    };

    return (
        <LoginForm 
            email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            handleSubmit={handleSubmit}
        />
    )
}