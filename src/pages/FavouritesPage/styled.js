import { Link } from "react-router-dom";
import styled from "styled-components";

export const FavouritesContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    height: 100%;
`;

export const FavouriteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.color.secondaryColor};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    gap: 15px;
    box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
    cursor: pointer;
`;

export const FavouriteLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const Image = styled.img`
    width: 150px;
    border-radius: ${({ theme }) => theme.borderRadius.big};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
   
`;