import React from 'react';
import {
    Button
} from './styles/btn';

const Btn = ({ children, ...restProps }) => {
    return <Button {...restProps}>{children}</Button>
}

export default Btn;