import { Link } from "react-router-dom";

const Characters = ({ characters }) => {

    return (
        <div>
            <h1>Characters</h1>
            {characters?.results.map(character => {
                return (
                    <Link to={`/character/${character.id}`} key={character.id}>
                        <p>{character.id}</p>
                        <h3>{character.name}</h3>
                        <img src={character.image} alt={character.name} />
                        <p>{character.gender}</p>
                        <p>{character.species}</p>
                        <p>{character.status}</p>
                        <button>Details</button>
                    </Link>
                )
            })}
        </div>
    )
};

export default Characters;