import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";

const SingleCharacter = () => {
    const { paramId } = useParams();
    const { isLoading, isError, character } = useCharacter(paramId);

    return (
        <div>
            <h1>SingleCharacter</h1>
            <div>
                {isError && <h2>Error...</h2>}
                {isLoading
                    ?
                    <h3>Loading...</h3>
                    :
                    (<div>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                        <h3>Status: {character.status}</h3>
                        <p>{character.species}</p>
                        <p>{character.gender}</p>
                        <h5>Origin: {character.origin.name}</h5>
                    </div>)}
            </div>
            <Link to="/">Back Home</Link>
            <Link to="/characters">Back Characters</Link>
        </div>
    )
};

export default SingleCharacter;