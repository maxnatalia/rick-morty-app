import { Header, Title, WrapperLink, Footer } from "./styled";
import { ButtonLink } from "../../common/styles/ButtonLink";
import { Paragraph } from "../../common/styles/Paragraph";
import { Container } from "../../common/styles/Container";

const HomePage = () => {
    return (
        <Container>
            <Header>
                <Title>Rick and Morty App</Title>
                <Paragraph>Explore different dimensions, planets and discover characters with Rick and Morty App</Paragraph>
            </Header>
            <WrapperLink>
                <ButtonLink to="/favourites">Favourites</ButtonLink>
                <ButtonLink to="/characters">Characters</ButtonLink>
                <ButtonLink to="/locations">Locations</ButtonLink>
                <ButtonLink to="/episode">Episodes</ButtonLink>
                <ButtonLink to="/quiz">Quiz</ButtonLink>
            </WrapperLink>
            <Footer>
                <Paragraph>Rick and Morty App &copy; {new Date().getFullYear()} Natalia Mazur-Żurek</Paragraph>
            </Footer>
        </Container>
    )
};

export default HomePage;