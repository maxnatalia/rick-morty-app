import ButtonLinksWrapper from "../../common/ButtonLinksWrapper";
import { Paragraph, Container, Title } from "../../common/styles";
import { Wrapper, SpaceIcon, Footer } from "./styled";

const HomePage = () => {
    return (
        <Container>
            <Title big>Rick and Morty App</Title>
            <Wrapper>
                <SpaceIcon />
                <Paragraph>
                    Explore different dimensions, planets and discover characters with Rick and Morty App
                </Paragraph>
                <SpaceIcon />
                <Paragraph>
                    Add your favourite characters from Rick and Morty to Favourites and have access to them all the time
                </Paragraph>
                <SpaceIcon />
                <Paragraph>
                    You can also test your knowledge by taking the Rick and Morty Quiz
                </Paragraph>
            </Wrapper>
            <ButtonLinksWrapper extraLinks />
            <Footer>
                <Paragraph>Rick and Morty App &copy; {new Date().getFullYear()} Natalia Mazur-Zurek</Paragraph>
            </Footer>
        </Container>
    )
};

export default HomePage;