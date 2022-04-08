import React from 'react';
import {
    Container
} from './styles/appointment-info';


const AppointmentInfo = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

export default AppointmentInfo;