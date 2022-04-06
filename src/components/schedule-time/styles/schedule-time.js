import styled from 'styled-components/macro';

export const Container = styled.div`
    overflow: auto;
    overflow-x: hidden;
    max-height: 60vh;
    padding: 20px;

`;

export const InnerContainer = styled.button`
    display: block;
    width: 100%;
    text-align: left;
    padding: 0;
    margin: 2px 0;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    

    transform: ${({chosen}) => chosen ? 'scale(.98)' : 'scale(1)'};
    transition: .1s;

    &:hover {
        transform: scale(.98);
    }

    &:disabled {
        background-color: rgba(255, 0, 0, 0.2);
        transform: none;
    }
`;

export const TimeStamp = styled.p`
    margin: 0;
    padding: 10px 0 10px 10px;
    user-select: none;
    font-size: 1rem;
    color: #000;
`;

