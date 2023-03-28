import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SingleCharacterPage from "./pages/SingleCharacterPage";
import LocationsPage from "./pages/LocationsPage";
import CharactersPage from "./pages/CharactersPage";
import EpisodesPage from "./pages/EpisodesPage";
import FavouritesPage from "./pages/FavouritesPage";
import QuizPage from "./pages/QuizPage";
import ScrollToTop from "./common/ScrollToTop";

const RickMortyApp = () => {
    return (
        <HashRouter>
            <ScrollToTop>
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
            </ScrollToTop>
        </HashRouter>
    )
};

export default RickMortyApp;