import { useGlobalContext } from "../../../context/global-context";
import { UnFavouriteIcon, FavouriteIcon } from "../../../common/styles/StarIcons";
import { CharacterContainer, CharacterWrapper, CharacterLink, CharacterName, Image, CharacterData, CharacterType } from "./styled";

const Characters = ({ characters }) => {
    const { isFavourite, handleFavouriteClick } = useGlobalContext();

    return (
        <CharacterContainer>
            {characters?.results.map((character) => {
                return (
                    <CharacterWrapper key={character.id}>
                        <CharacterLink to={`/character/${character.id}`} >
                            <CharacterName>{character.name}</CharacterName>
                            <Image src={character.image} alt={character.name} />
                            <CharacterData>
                                <span>Gender: </span>
                                <CharacterType>{character.gender}</CharacterType>
                            </CharacterData>
                            <CharacterData>
                                <span>Species: </span>
                                <CharacterType>{character.species}</CharacterType>
                            </CharacterData>
                            <CharacterData>
                                <span>Status: </span>
                                <CharacterType>{character.status}</CharacterType>
                            </CharacterData>
                        </CharacterLink>
                        {isFavourite(character.id)
                            ? <FavouriteIcon
                                title="Remove from Favourites"
                                onClick={() => handleFavouriteClick(character)} />
                            : < UnFavouriteIcon
                                pulse="true"
                                title="Add to Favourites"
                                onClick={() => handleFavouriteClick(character)} />
                        }
                    </CharacterWrapper>
                )
            })}
        </CharacterContainer>
    )
};

export default Characters;