import React from 'react';
import { Container, InnerContainer, TimeStamp } from './styles/schedule-time';

const ScheduleTime = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

ScheduleTime.Inner = ({ children, ...restProps }) => {
    return <InnerContainer {...restProps}>{children}</InnerContainer>
}

ScheduleTime.Timestamp = ({ children, ...restProps }) => {
    return <TimeStamp {...restProps}>{children}</TimeStamp>
}


export default ScheduleTime;