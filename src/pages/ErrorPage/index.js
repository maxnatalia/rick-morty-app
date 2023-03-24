import { Container, ButtonLink, Title, Paragraph } from "../../common/styles";

const ErrorPage = () => {
    return (
        <Container>
            <Title>Error...</Title>
            <Paragraph>Sorry, an error has occured...</Paragraph>
            <ButtonLink to="/">Back Home</ButtonLink>
        </Container>
    )
};

export default ErrorPage;