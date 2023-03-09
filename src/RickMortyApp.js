import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./components/pages/ErrorPage";
import SingleCharacterPage from "./components/pages/SingleCharacterPage";
import LocationsPage from "./pages/locations/LocationsPage";
import CharactersPage from "./pages/characters/CharactersPage";
import EpisodesPage from "./components/pages/EpisodesPage";

const RickMortyApp = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/character/:paramId" element={<SingleCharacterPage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/locations" element={<LocationsPage />} />
                <Route path="/episode" element={<EpisodesPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </HashRouter>
    )
};

export default RickMortyApp;