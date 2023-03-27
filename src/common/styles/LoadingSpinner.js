import styled from "styled-components";

export const LoadingSpinner = styled.div`
    margin: 0 auto;
    width: 18px;
    height: 18px;
    border: 4px dotted ${({ theme }) => theme.color.secondaryColor};
    border-radius: ${({ theme }) => theme.borderRadius.big};
    animation: spin 2s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;