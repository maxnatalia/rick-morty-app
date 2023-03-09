import { CharacterContainer, CharacterWrapper, CharacterName, Image, CharacterData, CharacterType } from "./styled";

const Characters = ({ characters }) => {

    return (
        <CharacterContainer>
            {characters?.results.map(character => {
                return (
                    <CharacterWrapper to={`/character/${character.id}`} key={character.id}>
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
                    </CharacterWrapper>
                )
            })}
        </CharacterContainer>
    )
};

export default Characters;