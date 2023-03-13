import styled from "styled-components";
import background from "./background.jpg";

export const Container = styled.div`
    background-blend-mode: screen;
    background-image: linear-gradient(to right, rgb(217,209,198), rgb(217,209,198, .4)), url("${background}");
    background-repeat: repeat-y;
    background-position: center;
    background-size: 100%;
    min-height: 100vh;
`;