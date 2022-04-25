import React from 'react';
import {
    Container,
    Title,
    InnerContainer,
    LabelField,
    InputField,
    Text,
    Link,
    TextArea,
    Button
} from './styles/input-form';

const Form = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

Form.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}

Form.InputContainer = ({ children, ...restProps }) => {
    return <InnerContainer {...restProps}>{children}</InnerContainer>
}

Form.Label = ({ children, ...restProps }) => {
    return <LabelField {...restProps}>{children}</LabelField>
}

Form.Input = ({ ...restProps }) => {
    return <InputField {...restProps} />
}

Form.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
}

Form.Link = ({ children, ...restProps }) => {
    return <Link {...restProps}>{children}</Link>
}

Form.Message = ({ children, ...restProps }) => {
    return <TextArea {...restProps}>{children}</TextArea>
}

Form.SendBtn = ({ children, ...restProps }) => {
    return <Button {...restProps}>{children}</Button>
}


export default Form;