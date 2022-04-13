import React from 'react';
import { useImmerReducer } from 'use-immer';
import { Availability } from '../../components';

const initialState = {
    startHour: 9,
    endHour: 17,
    interval: 30
}

const reducer = (draft, action) => {
    switch (action.type) {
        case 'MANUAL_INPUT':
            draft[action.value] = action.payload;
            return;
        case 'EQUAL_TIME':
            draft.endHour = action.payload;
            return;
        default:
            return
    }
}



export const AvailabilityContainer = ({ currentDayShown }) => {
    const [state, dispatch] = useImmerReducer(reducer, initialState);

    const handleChange = e => {
        let value = e.target.value < 0 ? 0 : e.target.value > 24 ? 24 : e.target.value;

        // Continue building this form

        // state.startHour >= state.endHour && dispatch({type: 'EQUAL_TIME', payload: state.startHour});
        dispatch({type: 'MANUAL_INPUT', value: e.target.name, payload: value});
    }

    return (
        <>
            <Availability.Heading>
            {currentDayShown.day < 10 ? `0${currentDayShown.day}` : currentDayShown.day} / {currentDayShown.month + 1< 10 ? `0${currentDayShown.month + 1}` : currentDayShown.month + 1} / {currentDayShown.year}
            </Availability.Heading>
            <Availability.Row>
                <Availability.Column>
                    <Availability.Button>+</Availability.Button>
                    <Availability.Input 
                        value={state.startHour} 
                        name="startHour"
                        type="number"
                        onChange={handleChange} 
                        min="0"
                        max="24"
                    />
                    <Availability.Button>-</Availability.Button>
                </Availability.Column>
                <Availability.Column>
                    <Availability.Button>+</Availability.Button>
                    <Availability.Input 
                        value={state.endHour} 
                        name='endHour' 
                        type="number"
                        onChange={handleChange} 
                        min="0"
                        max="24"
                    />
                    <Availability.Button>-</Availability.Button>
                </Availability.Column>
            </Availability.Row>
            <Availability.Row>
                <Availability.Input />
            </Availability.Row>
        </>
    )
}