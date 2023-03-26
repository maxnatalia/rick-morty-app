import { useGlobalContext } from "../../context/global-context";
import ButtonLinksWrapper from "../../common/ButtonLinksWrapper";
import { Container, Paragraph, Title, Button } from "../../common/styles";
import { FavouritesContainer, FavouriteWrapper, FavouriteLink, Image } from "./styled";

const FavouritesPage = () => {
    const { favourites, handleFavouriteClick } = useGlobalContext();

    return (
        <Container>
            <Title>Favourites</Title>
            <Paragraph>
                {favourites !== null && favourites.length === 0
                    ? "Unfortunately, you don't have any favourite characters"
                    : `You have ${favourites.length} favourite characters`
                }
            </Paragraph>
            <FavouritesContainer>
                {favourites.map((character) => {
                    return <FavouriteWrapper key={character.id}>
                        <FavouriteLink to={`/character/${character.id}`} >
                            <Paragraph>{character.name}</Paragraph>
                            <Image src={character.image} alt={character.name} />
                        </FavouriteLink>
                        <Button onClick={() => handleFavouriteClick(character)}>Remove Character</Button>
                    </FavouriteWrapper>
                })}
            </FavouritesContainer>
            <ButtonLinksWrapper />
        </Container>
    )
};

export default FavouritesPage;