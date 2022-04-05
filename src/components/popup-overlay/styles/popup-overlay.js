import styled from 'styled-components/macro';

export const Overlay = styled.div`
    position: fixed;
    right: 0; left: 0; bottom: 0;
    top: ${({isPopupOpen}) => isPopupOpen ? '0' : '100vh'};
    
    background-color: rgba(0, 0, 0, 0.2);
    transition: .3s ease-in-out;
`;

export const ContainerElement = styled.div`
    min-height: 80vh;
    max-width: 1300px;
    margin: 40px auto;
    background-color: #fff;

    display: grid;
    grid-template-rows: 100px 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "title title"
        "form timestamp";
    
    & > h2 {
        font-size: 2rem;
        line-height: 1.5;
        grid-area: title;
        text-align: center;
    }

    & > form {
        grid-area: form;
    }

`;