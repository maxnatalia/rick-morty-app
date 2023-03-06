
import { Container, Title, WrapperLink, ButtonLink } from "./styled";

const HomePage = () => {

    return (
        <Container>
            <Title>Rick and Morty App</Title>
            <WrapperLink>
                <ButtonLink to="/characters">Characters</ButtonLink>
                <ButtonLink to="/locations">Locations</ButtonLink>
                <ButtonLink to="/episode">Episodes</ButtonLink>
            </WrapperLink>
        </Container>
    )
};

export default HomePage;