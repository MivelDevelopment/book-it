import styled from 'styled-components/macro';

export const TabButton = styled.button`
    font-size: 1.5rem;
    font-weight: 400;

    padding: .5em 2em;
    border: 0;
    background-color: #eee;
    position: relative;

    &:not(:last-of-type)::after {
        display: block;
        content: '';
        width: 1px;
        height: 80%;
        position: absolute;
        right: 0px;
        top: 10%;
        background-color: #ccc;
    }

    &:hover {
        background-color: #ccc;
    }
`