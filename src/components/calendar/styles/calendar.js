import styled from 'styled-components/macro';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(50px, 1fr));
    grid-template-rows: 50px repeat(auto-fill, 100px);
    gap: 5px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
`;

export const DateContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
`;


export const MonthNameContent = styled.span`
    font-size: 2rem
`

export const YearContent = styled.span`
    font-size: 2rem;
`