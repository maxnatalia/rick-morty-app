import styled from "styled-components";

export const CountFavourites = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const EffectGlow = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%) translateY(-50%) scale(1);
    opacity: 1;
    width: 45px;
    height: 45px;
    border-radius: ${({ theme }) => theme.borderRadius.big};
    background-color:${({ theme }) => theme.color.primaryColor};
    animation: glow 1s ease-out infinite;

    @keyframes glow {
        0% {
            transform: translateX(-50%) translateY(-50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateX(-50%) translateY(-50%) scale(3);
            opacity: 0;
        }
    }
`;