import React from 'react';
import {
    Container,
    DateContent,
    DayContent
} from './styles/day-box';

const DayBox = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

DayBox.Date = ({ children, ...restProps}) => {
    return <DateContent {...restProps}>{children}</DateContent>
}

DayBox.DayOfWeek = ({ children, ...restProps }) => {
    return <DayContent {...restProps}>{children}</DayContent>
}


export default DayBox;