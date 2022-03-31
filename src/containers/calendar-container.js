import React, { useEffect, useState } from 'react';
import { Calendar, DayBox, ArrowButton } from '../components';
import { getNumOfDaysInMonth } from '../helpers/get-number-of-days-in-a-month';
import { getFirstDayOfMonth } from '../helpers/get-first-day-of-the-month';


export const CalendarContainer = ({ togglePopup, setSelectedDate }) => {    
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(getFirstDayOfMonth(month, year));
    const [numDays, setNumDays] = useState(getNumOfDaysInMonth(month, year));
    const [arrayOfDaysInMonth, setArrayOfDaysInMonth] = useState([]);


    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    const handleClick = (day, index) => {
        setSelectedDate({day, month, year});
        index < firstDayOfMonth ? handlePrevArrowClick() 
         : index > numDays + firstDayOfMonth - 1 ? handleNextArrowClick() 
         : togglePopup()
    }

    const handlePrevArrowClick = () => {
        if (month === 0) {
            setYear(year => year - 1);
            setMonth(11);
        } else {
            setMonth(month => month - 1);
        }
    }
    const handleNextArrowClick = () => {
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
    }, [numDays, firstDayOfMonth, month, year])


    return (
        <>
        <Calendar.TitleBox>
            <ArrowButton onClick={() => handlePrevArrowClick()}>&lt;</ArrowButton>

            <Calendar.TitleMonth>
                {new Date(year, month).toLocaleString('en-US', { month: 'long' })}
            </Calendar.TitleMonth>
            <Calendar.TitleYear>
                {year}
            </Calendar.TitleYear>
            
            <ArrowButton onClick={() => handleNextArrowClick()}>&gt;</ArrowButton>
        </Calendar.TitleBox>
        <Calendar>
                {daysOfWeek.map(day => (
                    <DayBox key={day}>
                        <DayBox.DayOfWeek>{day}</DayBox.DayOfWeek>
                    </DayBox>
                ))}
                {arrayOfDaysInMonth.map((day, index) => (
                <DayBox key={`${day}${index}`}>
                    
                    <DayBox.Date 
                        onClick={() => handleClick(day, index)} 
                        month={index < firstDayOfMonth || index > numDays + firstDayOfMonth - 1 ? 'other' : 'curr'}
                    >
                    {day}
                    </DayBox.Date>
                </DayBox>)
                )}
        </Calendar>
        </>
    )
}