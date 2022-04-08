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
    justify-content: center;

    min-height: 80vh;
    width: 80%;

    background-color: white;
`;

export const InnerColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    height: 100%;
    width: 50%;
    padding: 40px;
`;

export const SectionTitle = styled.h2`
    text-align: center;
`