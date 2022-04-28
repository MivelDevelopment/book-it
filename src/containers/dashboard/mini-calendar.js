import React, { useEffect, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

import { Calendar, DayBox } from '../../components';
import { CalendarHeadingContainer } from '../calendar/calendar-heading-container';
import { DaysOfWeek } from '../calendar/days-of-week';
import { getNumOfDaysInMonth } from '../../helpers/get-number-of-days-in-a-month';
import { getFirstDayOfMonth } from '../../helpers/get-first-day-of-the-month';
import { goToPreviousMonth } from '../../helpers/previous-month';
import { goToNextMonth } from '../../helpers/next-month';
import { getTodayDate } from '../../helpers/get-today-date';
import { 
    ChosenDateContext, UserContext} from '../../context';
import { fetchAppointmentsByDate } from '../../helpers/fetch-appointments-by-date';


const initialState = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    firstDayOfMonth: 0,
    numDays: 0,
    pastMonth: false,
    thisMonth: true,
    arrayOfDaysInMonth: []
}

const calendarReducer = (draft, action) => {
  switch (action.type) {
    case 'SET_MONTH': 
      draft.month = action.payload;
      return

    case 'SET_YEAR':
        draft.year = action.payload;
        return

    case 'SET_FIRST_DAY_OF_MONTH':
      draft.firstDayOfMonth = action.payload;
      return;

    case 'SET_NUM_DAYS_OF_MONTH':
      draft.numDays = action.payload;
      return;

    case 'SET_THIS_MONTH': 
      draft.thisMonth = action.payload;
      return

    case 'SET_PAST_MONTH':
      draft.pastMonth = action.payload;
      return

    case 'SET_ARRAY_OF_DAYS_IN_MONTH':
      draft.arrayOfDaysInMonth = action.payload;
      return

    default:
      return;
  }
}


export const MiniCalendar = ({ setOpenAvailability, currentDayShown, setCurrentDayShown }) => {   
    const { setChosenDate } = useContext(ChosenDateContext);
    const { signedInUser } = useContext(UserContext);

    const [state, dispatch] = useImmerReducer(calendarReducer, initialState);

    const {
      month, 
      year, 
      firstDayOfMonth, 
      numDays, 
      pastMonth, 
      thisMonth,
      arrayOfDaysInMonth
  } = state;
    
    const { today, todayMonth, todayYear } = getTodayDate();

    const handleClick = (day, index) => {
      setChosenDate({ day, month, year});

      let isBeforeFirstDayOfTheMonth = index < firstDayOfMonth;
      let isAfterLastDayOfTheMonth = index > numDays + firstDayOfMonth - 1;
      let isThisMonthButInPast = (thisMonth && day < today);

      isBeforeFirstDayOfTheMonth ? goToPreviousMonth(dispatch, month, year)
        : isAfterLastDayOfTheMonth && goToNextMonth(dispatch, month, year) 

      if (day === currentDayShown.day) {
        setOpenAvailability(false);
        setCurrentDayShown({});
      }
      if (!isBeforeFirstDayOfTheMonth && !isAfterLastDayOfTheMonth && !pastMonth && !isThisMonthButInPast && day !== currentDayShown.day) {
        setOpenAvailability(true);
        setCurrentDayShown({ day, month, year });
      }
      fetchAppointmentsByDate(signedInUser, {day, month, year});
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

    }, [dispatch, numDays, firstDayOfMonth, month, year, todayYear, todayMonth])



    /**
     * TODO
     * Continue with fetching of the data and make it
     * display on left-hand side of the dashboard
     */

    return (
        <>
        <CalendarHeadingContainer 
            month={month} 
            year={year} 
            dispatch={dispatch}
        />

        <Calendar.Mini>
            <DaysOfWeek isMini />
                
            {arrayOfDaysInMonth.map((day, index) => (
            <DayBox 
                key={`${day}${index}`} 
                datebox
                inThePast={(pastMonth && !(index < firstDayOfMonth) && !(index > numDays + firstDayOfMonth - 1)) 
                        || (thisMonth && day < today) }
            >
                <DayBox.Date 
                  isMini
                  onClick={() => handleClick(day, index)} 
                  month={index < firstDayOfMonth || index > numDays + firstDayOfMonth - 1 ? 'other' : 'curr'}
                >
                    {day}
                </DayBox.Date>
            </DayBox>
            ))}
            
        </Calendar.Mini>
        </>
    )
}