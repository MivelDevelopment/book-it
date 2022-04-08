import React, { useEffect, useState, useContext } from 'react';

import { Calendar, DayBox } from '../../components';
import { CalendarHeadingContainer } from './calendar-heading-container';
import { getNumOfDaysInMonth } from '../../helpers/get-number-of-days-in-a-month';
import { getFirstDayOfMonth } from '../../helpers/get-first-day-of-the-month';
import { getTodayDate } from '../../helpers/get-today-date';
import { 
    ChosenDateContext, 
    PopupContext } from '../../context'


export const CalendarContainer = () => {   
    const { setChosenDate } = useContext(ChosenDateContext);
    const { setIsPopupOpen } = useContext(PopupContext);

    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(getFirstDayOfMonth(month, year));
    const [numDays, setNumDays] = useState(getNumOfDaysInMonth(month, year));
    const [arrayOfDaysInMonth, setArrayOfDaysInMonth] = useState([]);
    const [pastMonth, setPastMonth] = useState(false);
    const [thisMonth, setThisMonth] = useState(true);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    const { today, todayMonth, todayYear } = getTodayDate();

    const handleClick = (day, index) => {
        setChosenDate({ day, month, year});
        index < firstDayOfMonth ? goToPreviousMonth() 
         : index > numDays + firstDayOfMonth - 1 ? goToNextMonth() 
         : pastMonth  || (thisMonth && day < today) ? setIsPopupOpen(false)
         : setIsPopupOpen(true);
    }
    

    const goToPreviousMonth = () => {
        if (month === 0) {
            setYear(year => year - 1);
            setMonth(11);
        } else {
            setMonth(month => month - 1);
        }
    }
    const goToNextMonth = () => {
        if (month === 11) {
            setYear(year => year + 1);
            setMonth(0)
        } else {
            setMonth(month => month + 1);
        }
    }
        
    useEffect(() => {
        setNumDays(getNumOfDaysInMonth(month, year));
        setFirstDayOfMonth(getFirstDayOfMonth(month, year));
        
        let prevAndCurrentMonth = numDays + firstDayOfMonth
        let isGridFull = prevAndCurrentMonth % 7 === 0
        let spotsLeft = isGridFull ? 0 : 7 - (prevAndCurrentMonth % 7);
        
        setArrayOfDaysInMonth([...Array(prevAndCurrentMonth + spotsLeft)].map((day, index) => {
            if (firstDayOfMonth > index) return day = new Date(year, month, index + 1 - firstDayOfMonth).getDate();
            
            if (!isGridFull && index + 1 > prevAndCurrentMonth) return day = new Date(year, month + 1, index - numDays - firstDayOfMonth + 1).getDate();
            
            return day = index - firstDayOfMonth +1;
        }));

        setThisMonth(year === todayYear && month === todayMonth);
        setPastMonth((year === todayYear && month < todayMonth) || year < todayYear);
        
    }, [numDays, firstDayOfMonth, month, year, todayYear, todayMonth])


    return (
        <>
        <CalendarHeadingContainer 
            month={month} 
            year={year} 
            goToPreviousMonth={goToPreviousMonth}
            goToNextMonth={goToNextMonth}
        />

        <Calendar>
                {daysOfWeek.map(day => (
                    <DayBox key={day}>
                        <DayBox.DayOfWeek>{day}</DayBox.DayOfWeek>
                    </DayBox>
                ))}
                {arrayOfDaysInMonth.map((day, index) => (
                    <DayBox 
                        key={`${day}${index}`} 
                        datebox={true} 
                        inThePast={(pastMonth && !(index < firstDayOfMonth) && !(index > numDays + firstDayOfMonth - 1)) 
                                || (thisMonth && day < today) }
                    >
                        
                        <DayBox.Date 
                            onClick={() => handleClick(day, index)} 
                            month={index < firstDayOfMonth || index > numDays + firstDayOfMonth - 1 ? 'other' : 'curr'}
                        >
                        {day}
                        </DayBox.Date>
                    </DayBox>
                ))}
        </Calendar>
        </>
    )
}