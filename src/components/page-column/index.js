import React from 'react';

import { InnerColumn } from './styles/page-column';

const Column = ({ children, ...restProps }) => {
    return <InnerColumn {...restProps}>{children}</InnerColumn>
};

export default Column;