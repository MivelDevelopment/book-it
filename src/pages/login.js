import React from 'react';
import { Column, PageContainer } from '../components';
import { LoginContainer } from '../containers/login/login-container';

export const LoginPage = () => {

    return (
        <PageContainer>

            <PageContainer.Inner>
                <PageContainer.Title>State your intentions</PageContainer.Title>
                <Column>
                    <h2>Manage your schedule</h2>
                    <LoginContainer />
                </Column>
                <Column>
                    <h2>Book an appointment</h2>
                </Column>
            </PageContainer.Inner>
        </PageContainer>
    )
}