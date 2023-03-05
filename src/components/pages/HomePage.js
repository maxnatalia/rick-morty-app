import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <div>
            <h1>Rick and Morty App</h1>
            <Link to="/characters">Characters</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/episode">Episodes</Link>
        </div>
    )
};

export default HomePage;