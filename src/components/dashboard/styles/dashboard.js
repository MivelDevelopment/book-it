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
    justify-content: space-evenly;

    min-height: 80vh;
    width: 80%;

    background-color: white;
`;

export const InnerColumn = styled.div`
    display: block;
    
    height: 80vh;
    width: 45%;
    
    position: relative;
`;

export const InnerContents = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
    max-height: 80vh;
    height: 100%;
    overflow: hidden;
    position: absolute;

    top: 0; left: 0;
    width: 100%;
    padding: 40px 0;

    z-index: ${({right, leftClicked}) => right && leftClicked ? '1' : right && !leftClicked && '2'};
    z-index: ${({left, rightClicked}) => left && rightClicked ? '1' : left && !rightClicked && '2'};
    left: ${({right, openSchedule}) => right && openSchedule && '-107%'};
    
    transition: .4s;
`;

export const SectionTitle = styled.h2`
    text-align: center;
`