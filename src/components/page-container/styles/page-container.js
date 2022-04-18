import styled from 'styled-components/macro';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    width: 100%;

    background-color: rgba(0, 0, 0, .1)
`;

export const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,  minmax(445px, 1fr));
    place-items: center;
    min-height: 30vh;
    width: 90%;

    background-color: white;
    
    @media (min-width: 991px) {
        grid-template-columns: repeat(2, minmax(400px, 1fr));
    }

    /*
    @media (min-width: 991px) {
        grid-template-columns: repeat(2, minmax(400px, 1fr));
        flex-direction: row;
        min-height: 80vh;
        width: 80%;
    }
    */
`;

export const PageTitle = styled.h1`
    grid-column: 1 / -1;
    font-size: 2rem;    
    text-align: center;
`;