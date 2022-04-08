import React from 'react';

import { Container,
    InnerContainer,
    Subtitle,
    Title } from './styles/appointment-list';

const AppointmentList = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

AppointmentList.Inner = ({ children, ...restProps }) => {
    return <InnerContainer {...restProps}>{children}</InnerContainer>
};

AppointmentList.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
};

AppointmentList.Subheading = ({ children, ...restProps}) => {
    return <Subtitle {...restProps}>{children}</Subtitle>
}


export default AppointmentList;