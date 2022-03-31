import React from 'react';
import { Button } from './styles/arrow-button';

const ArrowButton = ({ children, ...restProps }) => {
    return <Button {...restProps}>{children}</Button>
}

export default ArrowButton;