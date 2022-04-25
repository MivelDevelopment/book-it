import React from 'react';
import { Column, PageContainer } from '../components';
import { LoginForm } from '../containers/login/login-form';
import { SignupForm } from '../containers/sign-up/signup-form';
import { Routes, Route } from 'react-router-dom';

export const LoginPage = () => {

    return (
        <PageContainer>

            <PageContainer.Inner>
                <PageContainer.Title>Your personal assistant</PageContainer.Title>
                <Column>
                    <h2>Book an appointment</h2>
                </Column>
                <Column>
                    <h2>Manage your schedule</h2>
                    <Routes>
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/" element={<SignupForm />} />
                    </Routes>
                </Column>
            </PageContainer.Inner>
        </PageContainer>
    )
}