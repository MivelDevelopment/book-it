import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-shrink: 1;
    align-items: center;
    justify-content: center;

    cursor: ${({ datebox }) => datebox ? 'pointer' : 'default'};
    pointer-events: ${({ inThePast }) => inThePast ? 'none' : 'initial'};

    & > div {
        background-color:${({ inThePast }) => inThePast && 'rgba(255, 0, 0, .2)'};
    }
`;

export const DateContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    max-height: 100px;
    height: ${({isMini}) => isMini ? '35px' : '10vw'};
    max-width: 100px;
    width: 10vw;
    background-color: ${({ month }) => month === 'curr' ? 'lightblue' : 'rgba(33, 33, 33, .3)'};
    border: 1px solid black;
    border-radius: 10px;
    user-select: none;
`;

export const DayContent = styled(DateContent)`
    max-height: ${({isMini}) => isMini ? '35px' : '50px'};
`;
