import React from 'react';
import { Message } from './styles/error-message';

const ErrorMsg = ({ children, ...restProps }) => {
    return <Message {...restProps}>{children}</Message>
}

export default ErrorMsg;