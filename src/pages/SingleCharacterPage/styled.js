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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: 20px;
        justify-items: center;
    }
`;

export const DataCharacter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.color.secondaryColor};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
`;

export const Image = styled.img`
    border: 2px solid ${({ theme }) => theme.color.secondaryColor};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
`;

export const IconWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.big};
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.color.mediumColor};
    box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
`;