import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";
import { Container } from "../../common/styles/Container";
import { Title } from "../../common/styles/Title";
import { ButtonLink } from "../../common/styles/ButtonLink";
import { Paragraph } from "../../common/styles/Paragraph";
import { Wrapper, ButtonsWrapper, DataCharacter, Image, IconWrapper } from "./styled";
import StatusComponent from "../../common/statusComponent";
import { LoadingSpinner } from "../../common/styles/LoadingSpinner";
import { useGlobalContext } from "../../context/global-context";
import { FavouriteIcon, UnFavouriteIcon } from "../../common/styles/StarIcons";
import ButtonFavourites from "../../common/buttonFavourites/ButtonFavourites";

const SingleCharacter = () => {
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
                        ? "I like you tooo 😀"
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
            <ButtonsWrapper>
                <ButtonLink to="/">Back Home</ButtonLink>
                <ButtonLink to="/characters">Back Characters</ButtonLink>
                <ButtonLink to="/locations">Back Locations</ButtonLink>
                <ButtonLink to="/episode">Back Episodes</ButtonLink>
            </ButtonsWrapper>
        </Container>
    )
};

export default SingleCharacter;