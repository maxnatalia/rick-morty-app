import styled from "styled-components";

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