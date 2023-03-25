import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/global-context";
import { useCharacter } from "./useCharacter";
import StatusComponent from "../../common/StatusComponent";
import ButtonFavourites from "../../common/ButtonFavourites";
import ButtonLinksWrapper from "../../common/ButtonLinksWrapper";
import { Container, Title, Paragraph, LoadingSpinner, FavouriteIcon, UnFavouriteIcon } from "../../common/styles";
import { Wrapper, DataCharacter, Image, IconWrapper } from "./styled";

const SingleCharacterPage = () => {
    const { paramId } = useParams();
    const { isLoading, isError, character } = useCharacter(paramId);
    const { isFavourite, handleFavouriteClick } = useGlobalContext();

    return (
        <Container>
            {isError &&
                <StatusComponent
                    statusText={"Sorry, no character found..."}
                    titleText={"Error...😢"} />
            }
            {isLoading &&
                <StatusComponent
                    statusText={"Loading Single Character..."}
                    titleText={<LoadingSpinner />} />
            }
            {character &&
                <>
                    <Title>{character.name}</Title>
                    <ButtonFavourites />
                    <IconWrapper>
                        {isFavourite(character.id)
                            ? <FavouriteIcon
                                title="Remove from Favourites"
                                onClick={() => handleFavouriteClick(character)} />
                            : < UnFavouriteIcon
                                pulse="true"
                                title="Add to Favourites"
                                onClick={() => handleFavouriteClick(character)} />
                        }
                    </IconWrapper>
                    <Paragraph>{isFavourite(character.id)
                        ? "I like you too! 😀"
                        : "Why don't you like me? 😢"}
                    </Paragraph>
                    <Wrapper>
                        <Image src={character.image} alt={character.name} />
                        <DataCharacter>
                            <Paragraph>Status: {character.status}</Paragraph>
                            <Paragraph>Species: {character.species}</Paragraph>
                            <Paragraph>Gender: {character.gender}</Paragraph>
                            <Paragraph>Origin: {character.origin.name}</Paragraph>
                            <Paragraph>Location: {character.location.name}</Paragraph>
                        </DataCharacter>
                    </Wrapper>
                </>
            }
            <ButtonLinksWrapper />
        </Container>
    )
};

export default SingleCharacterPage;