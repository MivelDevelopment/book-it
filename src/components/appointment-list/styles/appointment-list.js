import styled from 'styled-components/macro';

export const Container = styled.div``;

export const InnerContainer = styled.div`
    background-color: rgba(33, 33, 33, .1);
    padding: 10px 15px;
    margin-bottom: 5px;
    border: 1px solid rgba(33, 33, 33, .1);
    border-radius: 3px;
    transition: .1s;
    transform: scale(1);

    &:hover {
        background-color: #fff;
        transform: scale(.98);
    }
    
`;

export const Title = styled.span``;

export const Subtitle = styled.h3`
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
`;