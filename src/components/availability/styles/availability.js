import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Heading = styled.h3`
    margin-top: .5rem;
    margin-bottom: .5rem;
    line-height: 1;
`;

export const Small = styled.span`
    font-size: .75rem;
`;

export const Info = styled.p`
    margin-bottom: 0;
    padding-left: 2rem;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 0 20px;

    @media (min-width: 991px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    
    width: 100%;
    max-width: 80px;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance: textfield;
    }
`;

export const Button = styled.button`
    font-size: 1.25rem;
    width: 100%;
    max-width: 80px;
`;

export const Interval = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    h3 {
        margin: 1rem 0;
        grid-column: 1 / -1;
    }
`;

