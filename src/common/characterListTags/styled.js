import styled from "styled-components";
import { Link } from "react-router-dom";

export const Tag = styled(Link)`
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) => theme.color.darkColor};
    color: ${({ theme }) => theme.color.primaryColor};
    transition: all .3s ease;

    &:hover {
        filter: brightness(120%);
        box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 14px;
        padding: 5px 10px;
    }
`;

