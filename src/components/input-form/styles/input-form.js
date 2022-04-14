import styled from 'styled-components/macro';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

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
    border-radius: 5px;
    border: 2px solid #000;
    font-size: 1.5rem;

    &:focus {
        border: 2px solid rgba(0, 0, 0, 1);
        border-radius: 5px;
        outline: none;
        box-shadow: 0 0 15px 5px rgba(0, 0, 0, .2);
    }
`;

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

    margin-top: 10px;
    padding: .25em .5em;
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid black;
    
    cursor: pointer;
    transition: .2s;

    &:hover {
        background-color: #eee;
    }
`;