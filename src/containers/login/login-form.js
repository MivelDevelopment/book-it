import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context';
import { Form } from '../../components';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setIsAuth } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        setIsAuth(true);
    };

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