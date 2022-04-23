import React from 'react';
import { 
    Container,
    InnerContainer,
    PageTitle } from './styles/page-container';

const PageContainer = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

PageContainer.Inner = ({ children, ...restProps }) => {
    return <InnerContainer {...restProps}>{children}</InnerContainer>
}

PageContainer.Title = ({ children, ...restProps }) => {
    return <PageTitle {...restProps}>{children}</PageTitle>
}

export default PageContainer;