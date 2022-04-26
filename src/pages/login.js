import React from 'react';
import { Column, PageContainer } from '../components';
import { LoginContainer } from '../containers/login/login-container';
import { SignupContainer } from '../containers/sign-up/sign-up-container';
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
                        <Route path="/login" element={<LoginContainer />} />
                        <Route path="/*" element={<SignupContainer />} />
                    </Routes>
                </Column>
            </PageContainer.Inner>
        </PageContainer>
    )
}