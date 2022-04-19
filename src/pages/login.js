import React from 'react';
import { Column, PageContainer } from '../components';
import { SignInContainer } from '../containers/login/sign-in-container';

export const LoginPage = () => {
    
    return (
    <PageContainer>
        
        <PageContainer.Inner>
        <PageContainer.Title>State your intentions</PageContainer.Title>
            <Column>
            <h2>Create a schedule</h2>
            <SignInContainer />
            </Column>
            <Column>
            <h2>Book an appointment</h2>
            </Column>
        </PageContainer.Inner>
    </PageContainer>
    )
}