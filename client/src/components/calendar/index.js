import React from 'react';
import { 
    Container,
    Mini,
    DateContent,
    MonthNameContent,
    YearContent
} from './styles/calendar';

const Calendar = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
};

Calendar.Mini = ({ children, ...restProps }) => {
    return <Mini {...restProps}>{children}</Mini>
}

Calendar.TitleBox = ({ children, ...restProps }) => {
    return <DateContent {...restProps}>{children}</DateContent>
}

Calendar.TitleYear = ({ children, ...restProps }) => {
    return <MonthNameContent {...restProps}>{children}</MonthNameContent>
}

Calendar.TitleMonth = ({ children, ...restProps }) => {
    return <YearContent {...restProps}>{children}</YearContent>
}

export default Calendar;