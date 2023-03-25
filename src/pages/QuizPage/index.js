import { useState } from "react";
import { questions } from "./questionsData";
import ButtonFavourites from "../../common/ButtonFavourites";
import ButtonLinksWrapper from "../../common/ButtonLinksWrapper";
import { Container, Title, Paragraph, Button } from "../../common/styles";
import { QuizContainer, Wrapper, AnswersWrapper, QuestionNumber } from "./styled";

const QuizPage = () => {
    const [quiz, setQuiz] = useState({
        currentQuestion: 0,
        score: 0,
        result: false,
    })

    const handleAnswerQuiz = (isCorrect) => {
        setQuiz(previous => ({
            ...previous,
            score: isCorrect === true ? previous.score + 1 : previous.score,
            currentQuestion: previous.currentQuestion + 1,
            result: previous.currentQuestion === questions.length - 1,
        }))
    };

    const handleNewQuiz = () => {
        setQuiz({
            currentQuestion: 0,
            score: 0,
            result: false,
        })
    };

    const { currentQuestion, score, result } = quiz;

    return (
        <Container>
            <Title>Quiz</Title>
            <Wrapper>
                {result
                    ? <Paragraph>You scored {score} out of {questions.length}</Paragraph>
                    : <Paragraph>
                        <span>Question {currentQuestion + 1}</span> / {questions.length}
                    </Paragraph>
                }
                {!result &&
                    <QuizContainer>
                        <QuestionNumber>{currentQuestion + 1}</QuestionNumber>
                        <Paragraph>{questions[currentQuestion].question}</Paragraph>
                        <AnswersWrapper>
                            {questions[currentQuestion].answers.map((answerOption, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleAnswerQuiz(answerOption.isCorrect)}>
                                    {answerOption.option}
                                </Button>
                            ))}
                        </AnswersWrapper>
                    </QuizContainer>
                }
                {result && <Button onClick={handleNewQuiz}>Start Again</Button>}
            </Wrapper>
            <ButtonFavourites />
            <ButtonLinksWrapper />
        </Container>
    )
};

export default QuizPage;