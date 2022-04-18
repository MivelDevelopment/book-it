import styled from 'styled-components/macro';
import { Heading } from '../../availability/styles/availability';

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
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 30vh;
    width: 90%;

    background-color: white;
    @media (min-width: 991px) {
        flex-direction: row;
        min-height: 80vh;
        width: 80%;
    }
`;

export const InnerColumn = styled.div`
    display: flex;
    position: relative;

    height: 45vh;
    width: 95%;

    background-color: #fff;
    
    @media (min-width: 991px) {
        height: 80vh;
        width: 50%;
    }
`;

export const InnerContents = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
    max-height: 30vh;
    height: 100%;
    overflow: hidden;
    position: absolute;

    top: 0; left: 5%;
    width: 90%;
    padding: 40px 0;

    transition: .4s;

    @media (min-width: 991px) {
        max-height: 80vh;
        max-width: 90%;
    }
`;

export const Subheading = styled(Heading)``;