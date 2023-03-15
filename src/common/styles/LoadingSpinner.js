import styled from "styled-components";

export const LoadingSpinner = styled.div`
    margin: 0 auto;
    width: 18px;
    height: 18px;
    border: 4px dotted black;
    border-radius: 50%;
    animation: spin 2s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;