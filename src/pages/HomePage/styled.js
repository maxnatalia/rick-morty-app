import styled from "styled-components";
import { ReactComponent as Space } from "./space.svg";

export const Wrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 40px;
    display: grid;
    grid-template-columns: 20% 1fr;
    grid-gap: 40px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

export const SpaceIcon = styled(Space)`
    width: 100px;
    height: auto;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.color.secondaryColor};
    border-radius: ${({ theme }) => theme.borderRadius.big};
    opacity: .8;
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    animation: spin 5s ease-out infinite;

    @keyframes spin {
        0% {
            transform: rotate(0);  
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const Footer = styled.footer`
    padding: 20px;
`;