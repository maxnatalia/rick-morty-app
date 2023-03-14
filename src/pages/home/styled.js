import styled from "styled-components";

export const Header = styled.header`
    margin: 0 auto;
    width: 60%;
    padding: 40px;

    @media (max-width: 767px) {
        padding: 10px;
        width: 100%;
    }
`;
export const Title = styled.h1`
    font-family: 'Creepster', cursive;
    color: rgb(217,209,198);
    margin: 0;
    text-align: center;
    padding: 20px;
    font-size: 78px;
    letter-spacing: 4px;
    text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);

    @media (max-width: 767px) {
        font-size: 58px;
    }
`;

export const WrapperLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 20px;
`;

export const Footer = styled.footer`
    padding: 20px;
`;
