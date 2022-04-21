import React from 'react';
import { Container, 
    InnerContainer,
    LabelField, 
    InputField ,
    TextArea,
    Button
} from './styles/input-form';

const Form = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
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

Form.Message = ({ children, ...restProps }) => {
    return <TextArea {...restProps}>{children}</TextArea>
}

Form.SendBtn = ({ children, ...restProps }) => {
    return <Button {...restProps}>{children}</Button>
}


export default Form;