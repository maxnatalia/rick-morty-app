import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <>
            <h1>HomePage - Rick and Morty App</h1>

            <Link to="/locations">Locations</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/episode">Episodes</Link>

        </>
    )
};

export default HomePage;