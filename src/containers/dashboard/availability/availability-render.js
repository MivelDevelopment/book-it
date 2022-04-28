import React from 'react';
import { Availability, ErrorMsg } from '../../../components';

export const AvailabilityRender = ({state, handleChange, increment, decrement, setScheduleInteval}) => {

    return (
        <>
            <Availability.Row>
                <Availability.Column>
                    <Availability.Heading>Start</Availability.Heading>
                    <Availability.Button onClick={() => increment('startHour')}>+</Availability.Button>
                    <Availability.Input 
                        value={state.startHour} 
                        name="startHour"
                        type="number"
                        onChange={handleChange} 
                        min="0"
                        max="23"
                    />
                    <Availability.Button onClick={() => decrement('startHour')}>-</Availability.Button>
                </Availability.Column>

                <Availability.Column>
                    <Availability.Heading>End</Availability.Heading>
                    <Availability.Button onClick={() => increment('endHour')}>+</Availability.Button>
                    <Availability.Input 
                        value={state.endHour} 
                        name='endHour' 
                        type="number"
                        onChange={handleChange} 
                        min="0"
                        max="24"
                    />
                    <Availability.Button onClick={() => decrement('endHour')}>-</Availability.Button>
                </Availability.Column>
            </Availability.Row>
                <ErrorMsg>{state.errorMessage}</ErrorMsg>
            <Availability.Interval>
                <Availability.Heading>Set schedule interval in minutes</Availability.Heading>
                    <Availability.Input 
                        value={state.interval} 
                        name="interval"
                        type="number" 
                        onChange={handleChange}
                        min="1"
                        max="999"
                    />
                    <Availability.Button onClick={setScheduleInteval} disabled={state.isButtonDisabled}>Set</Availability.Button>
            </Availability.Interval>
        </>
    )
}