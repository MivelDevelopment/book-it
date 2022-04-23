import React from 'react';
import { Overlay, 
    ContainerElement, 
    TimeAndDateContainer 
} from './styles/popup-overlay';

const PopupOverlay = ({ children, ...restProps }) => {
    return <Overlay {...restProps}>{children}</Overlay>
}

PopupOverlay.Container = ({ children, ...restProps }) => {
    return <ContainerElement {...restProps}>{children}</ContainerElement>
}

PopupOverlay.TimeAndDate = ({ children, ...restProps }) => {
    return <TimeAndDateContainer {...restProps}>{children}</TimeAndDateContainer>
}


export default PopupOverlay;