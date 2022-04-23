import React from 'react';
import {
    Container, Heading, Info
} from './styles/appointment-info';


const AppointmentInfo = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

AppointmentInfo.Heading = ({ children, ...restProps }) => {
    return <Heading {...restProps}>{children}</Heading>
}

AppointmentInfo.Info = ({ children, ...restProps }) => {
    return <Info {...restProps}>{children}</Info>
}


export default AppointmentInfo;