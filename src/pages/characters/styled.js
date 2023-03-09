import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "./background.png";

export const Container = styled.div`
    background-blend-mode: screen;
    background-image: linear-gradient(to right bottom, black, white), url("${background}");
    background-repeat: repeat-y;
    background-position: center;
    height: 100%;
    background-size: 100vw;
`;

export const CharacterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 70px;
    text-align: center;
    padding: 40px 80px;

    @media (max-width: 767px) {
        padding: 20px 40px;
    }
`;

export const CharacterWrapper = styled(Link)`
    display: grid;
    min-width: 300px;
    grid-template-columns: 1fr;
    grid-template-rows: 60px repeat(3, 50px);
    grid-gap: 10px;
    padding: 40px;
    position: relative;
    text-decoration: none;
    color: white;
    border-radius: 40px;
    border: 1px solid black;
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        transform: translateY(-10px) scale(1.1);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    }

    @media (max-width: 767px) {
        padding: 20px;
    }
`;

export const CharacterName = styled.h3`
    margin: 0;
    font-size: 24px;
    letter-spacing: 2px;
    align-self: flex-end;
    background: rgba(66, 68, 90, .8);
    border-radius: 20px;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 100px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    border: 1px solid black;
    position: absolute;
    top: -50px;
    left: -30px;
`;

export const CharacterData = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 10px;
    font-size: 20px;
    letter-spacing: 3px;
    border-radius: 20px;
    background: rgba(66, 68, 90, .5);

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;

export const CharacterType = styled.p`
    flex-grow: 1;
    margin: 0;
`;

export const FormWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    padding: 40px 80px;
    margin-bottom: 40px;
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

export const SelectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

export const LabelSelect = styled.label`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   width: 150px;
`;

export const LabelName = styled.span`
    text-transform: capitalize;
    background: rgba(66, 68, 90, .5);
    border-radius: 20px;
    padding: 5px 10px;
    letter-spacing: 2px;
    color: white;
`;

export const Select = styled.select`
    width: 100%;
    color: white;
    letter-spacing: 1.7px;
    padding: 10px 15px;
    border-radius: 40px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    border: 1px solid black;
    background: rgba(66, 68, 90, .5);
    cursor: pointer;
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