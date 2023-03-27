import styled from "styled-components";
import background from "./background.jpg";

export const Container = styled.div`
    background-blend-mode: screen;
    background-image: 
        linear-gradient(to right, ${({ theme }) => theme.color.primaryColor}, ${({ theme }) => theme.color.lightColor}), 
        url("${background}");
    width: 100%;
    min-height: 100vh;
    background-position: center;
`;