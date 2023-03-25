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
    border: 1px solid ${({ theme }) => theme.color.secondaryColor};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.darkShadow};
    position: relative;
`;

export const AnswersWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        flex-direction: column;
    }
`;

export const QuestionNumber = styled.span`
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.color.primaryColor};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.borderRadius.big};
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