import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.h3``;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`;

export const LabelField = styled.label`
    color: #333;
    font-size: 1.125rem;
    margin-bottom: 5px;

    &:hover {
        cursor: pointer;
    }
`;

export const InputField = styled.input`
    height: 40px;
    min-width: 300px;
    
    margin-bottom: 10px;
    padding: .25em;
    border: 0;
    border: 2px solid transparent;
    border-bottom-color: #000;
    border-radius: 5px;
    font-size: 1.5rem;

    &:focus {
        border-color: #000;
        outline: none;
        box-shadow: 0 0 15px 5px rgba(0, 0, 0, .2);
    }
`;

export const Text = styled.p`
    text-align: center;
`;

export const Link = styled(RouterLink)``;

export const TextArea = styled.textarea`
    height: 140px;
    min-width: 300px;
    resize: none;
    overflow: auto;

    margin-bottom: 10px;
    padding: .25em;
    border-radius: 5px;
    border: 2px solid black;
    font-size: 1.5rem;

    &:focus {
        border-radius: 5px;
        outline: none;
        box-shadow: 0 0 15px 5px rgba(0, 0, 0, .2);
    }
`

export const Button = styled.button`
    font-size: 1.125rem;
    color: #fff;

    margin-top: 10px;
    padding: .25em .5em;
    background-color: #7253d5;
    border-radius: 5px;
    border: 2px solid #7253d5;
    
    cursor: pointer;
    transition: .2s;

    &:hover,
    &:focus {
        color: #000;
        background-color: #fff;
    }

    &:disabled {
        opacity: .5;
    }

    &:disabled:hover
    &:disabled:focus {
        color: #fff;
        background-color: #7253d5;
        border-radius: 5px;
        border: 2px solid #7253d5;
    }
`;