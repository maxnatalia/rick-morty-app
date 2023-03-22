import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage";
import SingleCharacterPage from "./pages/singleCharacter/SingleCharacterPage";
import LocationsPage from "./pages/locations/LocationsPage";
import CharactersPage from "./pages/characters/CharactersPage";
import EpisodesPage from "./pages/episodes/EpisodesPage";
import FavouritesPage from "./pages/favourites/FavouritesPage";
import QuizPage from "./pages/quiz/QuizPage";

const RickMortyApp = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/character/:paramId" element={<SingleCharacterPage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/locations" element={<LocationsPage />} />
                <Route path="/episode" element={<EpisodesPage />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </HashRouter>
    )
};

export default RickMortyApp;