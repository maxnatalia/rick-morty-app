import { Container } from "../../common/styles/Container";
import { ButtonLink } from "../../common/styles/ButtonLink";
import { Title } from "../../common/styles/Title";
import { Paragraph } from "../../common/styles/Paragraph";

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