import styled, { css } from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

const StarIcons = css`
    font-size: 60px;
    padding: 10px;
    cursor: pointer;
    color: rgb(251,249,118);
    transition: all .5s ease-in-out;
    justify-self: center;

    &:hover {
        filter: brightness(80%);
        transform: scale(1.2);
    }

    ${({ big }) => big && css`
        font-size: 100px;
    `}
`;

export const UnFavouriteIcon = styled(AiOutlineStar)`
    ${StarIcons};
`;

export const FavouriteIcon = styled(BsFillStarFill)`
    ${StarIcons};
`;