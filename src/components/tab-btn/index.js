import React from 'react';
import { TabButton } from './styles/tab-btn';

const TabBtn = ({ children, ...restProps }) => {
    return <TabButton {...restProps}>{children}</TabButton>
}

export default TabBtn;