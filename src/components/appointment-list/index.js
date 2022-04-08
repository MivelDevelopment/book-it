import React from 'react';

import { Container,
    InnerContainer,
    Subtitle,
    Date,
    Time } from './styles/appointment-list';

const AppointmentList = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

AppointmentList.Inner = ({ children, ...restProps }) => {
    return <InnerContainer {...restProps}>{children}</InnerContainer>
};

AppointmentList.Date = ({ children, ...restProps }) => {
    return <Date {...restProps}>{children}</Date>
};

AppointmentList.Time = ({ children, ...restProps }) => {
    return <Time {...restProps}>{children}</Time>
}

AppointmentList.Subheading = ({ children, ...restProps}) => {
    return <Subtitle {...restProps}>{children}</Subtitle>
}


export default AppointmentList;