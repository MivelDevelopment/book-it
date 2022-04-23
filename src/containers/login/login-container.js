import React, { useState } from 'react';
import TabBtn from '../../components/tab-btn';
import { SignupForm } from './signup-form';

export const LoginContainer = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const signInTrue = () => {
        setIsSignIn(true);
    };
    const signInFalse = () => {
        setIsSignIn(false);
    };

    return (
        <>
        <div>
            <TabBtn onClick={signInTrue}>Log in</TabBtn>
            <TabBtn onClick={signInFalse}>Sign up</TabBtn>
        </div>
            {isSignIn ? <h3>Login</h3> : <SignupForm />}
        </>
    )
}