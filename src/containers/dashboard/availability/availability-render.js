import React from 'react';
import { Availability, ErrorMsg } from '../../../components';

export const AvailabilityRender = ({ state, handleChange, increment, decrement, setScheduleInteval }) => {

    return (
        <>
            <Availability.Row>
                <Availability.Column>
                    <Availability.Heading>Start<br /><Availability.Small>(hour)</Availability.Small></Availability.Heading>
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
                    <Availability.Heading>End<br /><Availability.Small>(hour)</Availability.Small></Availability.Heading>
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

                <Availability.Column>
                    <Availability.Heading>Break<br /><Availability.Small>(minutes)</Availability.Small></Availability.Heading>
                    <Availability.Button onClick={() => increment('breakInterval')}>+</Availability.Button>
                    <Availability.Input
                        value={state.breakInterval}
                        name="breakInterval"
                        type="number"
                        onChange={handleChange}
                    />
                    <Availability.Button onClick={() => decrement('breakInterval')}>-</Availability.Button>
                </Availability.Column>
            </Availability.Row>

            <ErrorMsg>{state.errorMessage}</ErrorMsg>

            <Availability.Interval>
                <Availability.Heading>Set schedule length <br /><Availability.Small>(minutes)</Availability.Small></Availability.Heading>
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