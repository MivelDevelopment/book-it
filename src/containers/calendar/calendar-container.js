import React, { useEffect, useContext, useReducer } from 'react';

import { Calendar, DayBox } from '../../components';
import { CalendarHeadingContainer } from './calendar-heading-container';
import { getNumOfDaysInMonth } from '../../helpers/get-number-of-days-in-a-month';
import { getFirstDayOfMonth } from '../../helpers/get-first-day-of-the-month';
import { goToPreviousMonth } from '../../helpers/previous-month';
import { goToNextMonth } from '../../helpers/next-month';
import { getTodayDate } from '../../helpers/get-today-date';
import { 
    ChosenDateContext, 
    PopupContext } from '../../context';
import { DaysOfWeek } from './days-of-week';


const initialState = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    firstDayOfMonth: 0,
    numDays: 30,
    pastMonth: false,
    thisMonth: true,
    arrayOfDaysInMonth: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MONTH':
      return {
        ...state, 
        month: action.payload
      }

    case 'SET_YEAR':
      return {
        ...state, 
        year: action.payload
      }

    case 'SET_FIRST_DAY_OF_MONTH':
      return {
        ...state,
        firstDayOfMonth: action.payload
      }

    case 'SET_NUM_DAYS_OF_MONTH':
      return {
        ...state,
        numDays: action.payload
      }

    case 'SET_THIS_MONTH': 
      return {
        ...state,
        thisMonth: action.payload
      }

    case 'SET_PAST_MONTH':
      return {
        ...state,
        pastMonth: action.payload
      }

    case 'SET_ARRAY_OF_DAYS_IN_MONTH':
      return {
        ...state, 
        arrayOfDaysInMonth: action.payload
      }

    default:
      return state;
  }
}


export const CalendarContainer = () => {   
    const { setChosenDate } = useContext(ChosenDateContext);
    const { setIsPopupOpen } = useContext(PopupContext);

    const [{
        month, 
        year, 
        firstDayOfMonth, 
        numDays, 
        pastMonth, 
        thisMonth,
        arrayOfDaysInMonth
    }, dispatch] = useReducer(reducer, initialState);
    
    const { today, todayMonth, todayYear } = getTodayDate();

    const handleClick = (day, index) => {
        setChosenDate({ day, month, year});
        index < firstDayOfMonth ? goToPreviousMonth(dispatch, month, year)
            : index > numDays + firstDayOfMonth - 1 ? goToNextMonth(dispatch, month, year) 
            : pastMonth  || (thisMonth && day < today) ? setIsPopupOpen(false)
            : setIsPopupOpen(true);
    }
    
    useEffect(() => {
        dispatch({ type: 'SET_NUM_DAYS_OF_MONTH', payload: getNumOfDaysInMonth(month, year) });
        dispatch({ type: 'SET_FIRST_DAY_OF_MONTH', payload: getFirstDayOfMonth(month, year) });
        dispatch({ type: 'SET_THIS_MONTH', payload: year === todayYear && month === todayMonth });
        dispatch({ type: 'SET_PAST_MONTH', payload: (year === todayYear && month < todayMonth) || year < todayYear });
        
        let prevAndCurrentMonth = numDays + firstDayOfMonth;
        let isGridFull = prevAndCurrentMonth % 7 === 0
        let spotsLeft = isGridFull ? 0 : 7 - (prevAndCurrentMonth % 7);
        
        dispatch({ type: 'SET_ARRAY_OF_DAYS_IN_MONTH', payload: 
            [...Array(prevAndCurrentMonth + spotsLeft)].map((day, index) => {
                if (firstDayOfMonth > index) return day = new Date(year, month, index + 1 - firstDayOfMonth).getDate();
                if (!isGridFull && index + 1 > prevAndCurrentMonth) return day = new Date(year, month + 1, index - numDays - firstDayOfMonth + 1).getDate();
                return day = index - firstDayOfMonth +1;
            })})

    }, [numDays, firstDayOfMonth, month, year, todayYear, todayMonth])


    return (
        <>
        <CalendarHeadingContainer 
            month={month} 
            year={year} 
            dispatch={dispatch}
        />

        <Calendar>
            <DaysOfWeek />
                
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