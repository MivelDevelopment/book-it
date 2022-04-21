import React from 'react';
import { Overlay } from './styles/schedule-popup';

const SchedulePopup = ({ children, ...restProps }) => {
    return <Overlay {...restProps}>{children}</Overlay>
}


export default SchedulePopup;