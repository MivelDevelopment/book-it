import styled from 'styled-components/macro';

export const Overlay = styled.div`
    position: fixed;
    right: 0; left: 0; bottom: 0;
    top: ${({isPopupOpen}) => isPopupOpen ? '0' : '100vh'};
    
    background-color: rgba(0, 0, 0, 0.2);
    transition: .3s ease-in-out;
    z-index: 5;
`;

export const ContainerElement = styled.div`
    min-height: 85vh;
    max-width: 1300px;
    margin: 40px auto;
    background-color: #fff;

    display: grid;
    grid-template-rows: 120px 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "title title"
        "form timestamp";
    & > form {
        grid-area: form;
    }

`;

export const TimeAndDateContainer = styled.div`
    grid-area: title;
    
    & > * {
        line-height: 1.5;
        text-align: center;
    }

    & > .date-label {
        font-size: 2rem;
        margin-bottom: .25em;
    }
    & > .time-label {
        font-size: 1.5rem;
        margin-top: .25em;
        margin-bottom: 0;
    }
`;
