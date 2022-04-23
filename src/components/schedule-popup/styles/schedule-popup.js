import styled from 'styled-components/macro';

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    right: 0; left: 0; bottom: 0;
    top: ${({popupOpen}) => popupOpen ? '0' : '100vh'};
    transition: .3s ease-in-out;
`;