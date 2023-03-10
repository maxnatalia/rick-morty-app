import styled, { css } from "styled-components";

export const LocationsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 40px;
    padding: 40px 80px;

    @media (max-width: 767px) {
        padding: 10px 20px;
    }
`;

export const LocationWrapper = styled.div`
    display: flex;
    background-color: transparent;
    flex-direction: column;
    gap: 20px;
    padding: 10px 20px;
    position: relative;
    border: 1px solid black;
    border-radius: 40px;
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    text-align: center;
`;

export const LocationNumber = styled.span`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(217,209,198);
    font-size: 28px;
    font-weight: 600;
    border-radius: 50%;
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    position: absolute;
    top: -15px;
    left: -15px;
`;

export const LocationName = styled.h3`
    font-size: 24px;
    letter-spacing: 2px;
    background: rgb(217,209,198, .6);
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    border-radius: 10px;
    padding: 10px;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

export const LocationData = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    font-size: 20px;
    
    @media (max-width: 767px) {
        font-size: 14px;
    }
`;

export const LocationType = styled.p`
    padding: 10px;
    border-radius: 10px;
    background: rgba(66, 68, 90, .9);
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    color: rgb(217,209,198);
    font-weight: 600;
    letter-spacing: 3.5px;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    gap: 15px;
`;

export const Input = styled.input`
    padding: 10px 15px;
    border-radius: 40px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    border: 1px solid black;
    background: rgba(66, 68, 90, .5);
    letter-spacing: 1.7px;
    color: white;

    &::placeholder{
        color: white;
    }
`;

export const Button = styled.button`
    padding: 10px 35px;
    border-radius: 40px;
    background-color: transparent;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    }
`;

export const TypeButton = styled.button`
    padding: 10px 15px;
    border-radius: 40px;
    color: white;
    letter-spacing: 3px;
    background-color: rgba(66, 68, 90, .5);
    cursor: pointer;
    transition: all .3s ease;
    border: 2px solid transparent;

    ${({ active }) => active && css`
        border: 2px solid white;
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    `}

    &:hover {
        transform: scale(1.1);
        filter: brightness(120%);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    }
`;

export const ResidentsList = styled.ul`
    list-style: none;
    padding: 0;
`;