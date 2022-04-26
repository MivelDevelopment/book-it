import React from 'react';
import { Form } from '../../components';

export const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => {

    return (
        <>
            <Form.Title>Login</Form.Title>

            <Form onSubmit={handleSubmit}>
                <Form.InputContainer>
                    <Form.Label htmlFor="user-email" >Email address</Form.Label>
                    <Form.Input
                        id="user-email"
                        name="email"
                        required
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.InputContainer>

                <Form.InputContainer>
                    <Form.Label htmlFor="user-password" >Password</Form.Label>
                    <Form.Input
                        id="user-password"
                        name="password"
                        required
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.InputContainer>

                <Form.InputContainer>
                    <Form.SendBtn
                        type="submit"
                        disabled={!email || !password}
                    >Submit</Form.SendBtn>
                </Form.InputContainer>
            </Form>

            <Form.Text>Not registered yet? <br /><Form.Link to="/"><u>Click here to create an account</u></Form.Link></Form.Text>
        </>
    )
}