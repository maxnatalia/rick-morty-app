import styled, { css } from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

const StarIcons = css`
    font-size: 60px;
    padding: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.specialColor};
    transition: all .5s ease-in-out;
    justify-self: center;

    &:hover {
        filter: brightness(80%);
        transform: scale(1.2);
    }

    ${({ big }) => big && css`
        font-size: 80px;

        @media(max-width:${({ theme }) => theme.breakpoint.mobile}) {
            font-size: 60px;
        }
    `}

    ${({ pulse }) => pulse && css`
        animation: pulse 2s linear infinite;

        @keyframes pulse {
            0% {
                transform: scale(0.7);
            }
            50% {
                transform: scale(1);
                filter: brightness(150%);
            }
            100% {
                transform: scale(0.7);
            }
        }
    `}
`;

export const UnFavouriteIcon = styled(AiOutlineStar)`
    ${StarIcons};
`;

export const FavouriteIcon = styled(BsFillStarFill)`
    ${StarIcons};
`;