import React from 'react';

import {
    Container,
    InnerContainer,
    BackButtonContainer,
    InnerColumn,
    InnerContents,
    Subheading,
    Back
} from './styles/dashboard';

const Dashboard = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

Dashboard.Inner = ({ children, ...restProps }) => {
    return <InnerContainer {...restProps}>{children}</InnerContainer>
}

Dashboard.BackButtonContainer = ({ children, ...restProps }) => {
    return <BackButtonContainer {...restProps}>{children}</BackButtonContainer>
}

Dashboard.Column = ({ children, ...restProps }) => {
    return <InnerColumn {...restProps}>{children}</InnerColumn>
}

Dashboard.InnerContents = ({ children, ...restProps }) => {
    return <InnerContents {...restProps}>{children}</InnerContents>
}

Dashboard.Subheading = ({ children, ...restProps }) => {
    return <Subheading {...restProps}>{children}</Subheading>
}

Dashboard.BackButton = ({ children, ...restProps }) => {
    return <Back {...restProps}>{children}</Back>
}


export default Dashboard;