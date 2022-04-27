import React from 'react';

import { Form } from '../../components';

export const SignupForm = ({ handleSubmit, senderInfo, handleChange, password, setPassword }) => {

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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
