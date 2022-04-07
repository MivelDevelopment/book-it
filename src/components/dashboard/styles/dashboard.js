import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    width: 100%;

    background-color: rgba(0, 0, 0, .1)
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    min-height: 80vh;
    width: 80%;

    background-color: white;
`;

export const InnerColumn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    width: 50%;
`;

export const SectionTitle = styled.h2``