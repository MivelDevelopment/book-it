import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-shrink: 1;
    align-items: center;
    justify-content: center;
`;

export const DateContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100px;
    width: 100px;
    background-color: ${({month}) => month === 'curr' ? 'lightblue' : 'lightgray'};
    border: 1px solid black;
    border-radius: 10px;
`;

export const DayContent = styled(DateContent)`
    min-height: 50px;
`;
