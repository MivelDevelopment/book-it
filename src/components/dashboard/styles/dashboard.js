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
    flex-direction: column-reverse;

    width: 90%;
    max-width: 991px;
    padding: 20px;
    border-radius: 50px;
    background-color: white;
    
    @media (min-width: 600px) {
        padding: 50px;
    }

    @media (min-width: 991px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 100px;

        min-height: 80vh;
        width: 80%;

    }
    
`;

export const InnerColumn = styled.div`
    display: flex;
    position: relative;

    height: 45vh;
    justify-content: center;

    background-color: #fff;
    
    @media (min-width: 991px) {
        height: 70vh;
    }
`;

export const InnerContents = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
    height: 100%;
    overflow: hidden;
    width: 90%;
    padding: 0;

    transition: .4s;

    @media (min-width: 991px) {
        max-height: 80vh;
        padding: 40px 0;
    }
`;

export const Subheading = styled(Heading)``;