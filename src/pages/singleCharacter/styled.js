import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    justify-content: center;
    grid-gap: 40px;
    padding: 40px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: 20px;
        justify-items: center;
    }
`;

export const DataCharacter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    border: 1px solid black;
    border-radius: 40px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);

    @media(max-width: 767px) {
        align-items: center;
    }
`;

export const Image = styled.img`
    border: 2px solid black;
    border-radius: 40px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const IconWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: rgba(66, 68, 90, .5);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;