import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage/index.js";
import ErrorPage from "./components/pages/ErrorPage";
import SingleCharacter from "./components/pages/SingleCharacter";

const RickMortyApp = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/character/:id" element={<SingleCharacter />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </HashRouter>
    )
};

export default RickMortyApp;