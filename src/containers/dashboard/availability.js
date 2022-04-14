import React from 'react';
import { useImmerReducer } from 'use-immer';

import { AvailabilityContainer } from './availability/availability-container';
import { populateSchedule } from '../../helpers/populate-schedule-by-interval';

const initialState = {
    startHour: 9,
    endHour: 17,
    interval: 30,
    errorMessage: '',
    isErrorDisplayed: false,
    isButtonDisabled: false
}

const reducer = (draft, action) => {
    switch (action.type) {
        case 'MANUAL_INPUT':
            draft[action.value] = action.payload;
            return;
        case 'INCREMENT':
            draft[action.target] = action.payload + 1;
            return;
        case 'DECREMENT':
            draft[action.target] = action.payload - 1;
            return;
        case 'DISPLAY_ERROR':
            draft.errorMessage = action.payload;
            draft.isErrorDisplayed = true;
            return;
        case 'RESET_ERROR':
            draft.errorMessage = '';
            draft.isErrorDisplayed = false;
            draft.isButtonDisabled = false;
            return;
        case 'DISABLE_BUTTON':
            draft.isButtonDisabled = true;
            return;
        default:
            return
    }
}



export const Availability = () => {
    const [state, dispatch] = useImmerReducer(reducer, initialState);

    const handleChange = e => {
        let value;
        if (e.target.name !== 'interval') {
            value = e.target.value < 0 ? 0 : e.target.value > 24 ? 24 : e.target.value;
        }
        if (e.target.name === 'interval') {
            value = e.target.value <= 1 ? 1 : e.target.value > 999 ? 999 : e.target.value;
        }
        dispatch({type: 'MANUAL_INPUT', value: e.target.name, payload: Number(value)});
        dispatch({type: 'RESET_ERROR'});
    }

    const increment = (target) => {
        let value = state[target] >= 23 ? 23 : state[target];
        dispatch({type: 'INCREMENT', target: target, payload: Number(value)});

        if (state.startHour >= state.endHour) {
            let payload = state.startHour >= 23 ? 23 : state.startHour;
            dispatch({ type: 'INCREMENT', target: 'endHour', payload: payload});
        }
        dispatch({type: 'RESET_ERROR'});
    }

    const decrement = (target) => {
        let value = state[target] < 1 ? 1 : state[target];
        dispatch({type: 'DECREMENT', target: target, payload: Number(value)});

        if (state.startHour >= state.endHour) {
            let payload = state.endHour <= 1 ? 1 : state.endHour;
            dispatch({ type: 'DECREMENT', target: 'startHour', payload: payload});
        }
        dispatch({type: 'RESET_ERROR'});
    }

    const setScheduleInteval = () => {
        const {startHour: start, endHour: end, interval} = state;
        if (start === end) dispatch({type: 'DISPLAY_ERROR', payload: 'Starting time and ending time cannot be the same! Did you want to set an individual appointment?'});
        if (start > end) dispatch({type: 'DISPLAY_ERROR', payload: 'Starting time cannot be set later than ending time'});
        if (start > end || start === end) dispatch({type: 'DISABLE_BUTTON'})
        console.log(populateSchedule(start, end, interval))
    }

    return (
            <AvailabilityContainer 
                state={state}
                handleChange={handleChange}
                increment={increment}
                decrement={decrement}
                setScheduleInteval={setScheduleInteval}
            />
    )
}