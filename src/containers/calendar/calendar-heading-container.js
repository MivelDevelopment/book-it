import React from 'react';
import { Calendar, ArrowButton } from "../../components";


export const CalendarHeadingContainer = ({ month, year, goToPreviousMonth, goToNextMonth }) => {

    return (
        <Calendar.TitleBox>
            <ArrowButton onClick={() => goToPreviousMonth()}>&lt;</ArrowButton>

            <Calendar.TitleMonth>
                {new Date(year, month).toLocaleString('en-US', { month: 'long' })}
            </Calendar.TitleMonth>
            <Calendar.TitleYear>
                {year}
            </Calendar.TitleYear>
            
            <ArrowButton onClick={() => goToNextMonth()}>&gt;</ArrowButton>
        </Calendar.TitleBox>
    )
}