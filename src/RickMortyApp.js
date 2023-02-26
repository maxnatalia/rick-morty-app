import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage/index.js";
import ErrorPage from "./components/pages/ErrorPage";
import SingleCharacter from "./components/pages/SingleCharacter";
import Locations from "./components/pages/HomePage/Locations.js";

const RickMortyApp = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/character/:paramId" element={<SingleCharacter />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </HashRouter>
    )
};

export default RickMortyApp;