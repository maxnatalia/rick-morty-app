import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 24px;
    font-weight: 600;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 18px;
    }
`;