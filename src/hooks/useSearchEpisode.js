import { useState } from "react";

const useSearchEpisode = () => {

    const [nameEpisode, setNameEpisode] = useState('');

    const handleInputName = (e) => {
        setNameEpisode(e.target.value);
    };

    const handleClearName = () => {
        setNameEpisode('');
    };

    return { nameEpisode, setNameEpisode, handleClearName, handleInputName }
};

export default useSearchEpisode;