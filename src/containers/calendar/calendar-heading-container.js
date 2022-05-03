import React from 'react';
import { Calendar, ArrowButton } from "../../components";
import { goToPreviousMonth } from '../../helpers/previous-month';
import { goToNextMonth } from '../../helpers/next-month';


export const CalendarHeadingContainer = ({ dispatch, month, year }) => {

    return (
        <Calendar.TitleBox>
            <ArrowButton onClick={() => goToPreviousMonth(dispatch, month, year)}>&lt;</ArrowButton>

            <Calendar.TitleMonth>
                {new Date(year, month).toLocaleString('en-US', { month: 'long' })}
            </Calendar.TitleMonth>
            <Calendar.TitleYear>
                {year}
            </Calendar.TitleYear>

            <ArrowButton onClick={() => goToNextMonth(dispatch, month, year)}>&gt;</ArrowButton>
        </Calendar.TitleBox>
    )
}