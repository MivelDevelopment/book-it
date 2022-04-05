import React, { useState } from 'react';

import { InputForm } from "../components";

export const FormContainer = () => {
    
    const submitForm = (e) => {
        e.preventDefault()
    }

    return (
        <InputForm onSubmit={submitForm}>
            <InputForm.InputContainer>
                <InputForm.Label htmlFor="booker-name" >Your name</InputForm.Label>
                <InputForm.Input 
                    id="booker-name" 
                    required 
                    className="required-input-field"
                />
            </InputForm.InputContainer>
            <InputForm.InputContainer>
                <InputForm.Label htmlFor="booker-email">Email address</InputForm.Label>
                <InputForm.Input 
                    id="booker-email" 
                    required 
                />
            </InputForm.InputContainer>
            <InputForm.InputContainer>
                <InputForm.Label htmlFor="booker-phone-number">Phone number (optional)</InputForm.Label>
                <InputForm.Input 
                    id="booker-phone-number" 
                />
            </InputForm.InputContainer>
            <InputForm.InputContainer>
                <InputForm.Label htmlFor="booker-message">Message (optional)</InputForm.Label>
                <InputForm.Message 
                    id="booker-message"
                ></InputForm.Message>
            </InputForm.InputContainer>
            <InputForm.InputContainer>
                <InputForm.SendBtn type="submit">Submit</InputForm.SendBtn>
            </InputForm.InputContainer>

        </InputForm>
    )
}


// InputContainer
// Label
// Input