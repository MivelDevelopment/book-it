import React from 'react';
import {
    Button, ButtonContainer
} from './styles/btn';

const Btn = ({ children, ...restProps }) => {
    return <Button {...restProps}>{children}</Button>
};

Btn.Container = ({ children, ...restProps }) => {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
};

export default Btn;