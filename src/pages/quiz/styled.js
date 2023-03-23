import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
`;

export const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 40px;
    border: 1px solid black;
    border-radius: 40px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    position: relative;
`;

export const AnswersWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;

    @media(max-width: 767px) {
        flex-direction: column;
    }
`;

export const QuestionNumber = styled.span`
    width: 50px;
    height: 50px;
    background-color: rgb(217,209,198);
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    border: 1px solid transparent;
    border-radius: 50%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 26px;
    position: absolute;
    top: -20px;
    left: -15px;
`;