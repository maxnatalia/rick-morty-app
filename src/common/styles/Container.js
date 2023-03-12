import styled from "styled-components";
import background from "./background.jpg";

export const Container = styled.div`
    background-blend-mode: screen;
    background-image: linear-gradient(to right bottom, black, white), url("${background}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
`;