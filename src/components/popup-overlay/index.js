import React from 'react';
import { Overlay, ContainerElement } from './styles/popup-overlay';

const PopupOverlay = ({ children, ...restProps }) => {
    return <Overlay {...restProps}>{children}</Overlay>
}

PopupOverlay.Container = ({ children, ...restProps }) => {
    return <ContainerElement {...restProps}>{children}</ContainerElement>
}

export default PopupOverlay;