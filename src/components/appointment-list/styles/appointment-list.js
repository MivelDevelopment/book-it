import styled from 'styled-components/macro';

export const Container = styled.div`
overflow: auto;
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: rgba(33, 33, 33, .1);
    padding: 10px 15px;
    margin-bottom: 5px;
    border: 1px solid rgba(33, 33, 33, .1);
    border-radius: 3px;
    transition: .1s;
    transform: scale(1);

    cursor: pointer;

    &:hover {
        background-color: #fff;
        transform: scale(.98);
    }
    
`;

export const Date = styled.span``;

export const Time = styled.span``;

export const Subtitle = styled.h3`
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
`;