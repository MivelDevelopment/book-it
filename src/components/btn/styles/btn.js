import styled from 'styled-components';

export const Button = styled.button`
    font-size: 1.125rem;
    padding: .5em 1em;
    margin-bottom: 5px;
    border: 1px solid rgba(33,33,33,.1);
    border-radius: 3px;
    cursor: pointer;
    transform: scale(1);
    transition: .1s;
    background-color: ${({type}) => type === 'remove' ? 'rgba(255, 125, 125, 1)' : ''};

    &:hover {
        transform: scale(.98);
        background-color: ${({type}) => type === 'remove' ? 'rgba(255, 125, 125, .6)' : ''};
    }

    &:active {
        transform: scale(1);
    }

`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 20px;
    margin-bottom: 20px;
`;
