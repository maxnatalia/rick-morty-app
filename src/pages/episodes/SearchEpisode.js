import { Input } from "../../common/styles/Input";
import { Button } from "../../common/styles/Button";
import { SearchContainer } from "./styled";
import { useGlobalContext } from "../../context/global-context";
import { useEffect, useRef } from "react";

const SearchEpisode = () => {
    const { nameEpisode, handleClearName, handleInputName } = useGlobalContext();
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <SearchContainer>
            <Input
                ref={inputRef}
                type="text"
                name="name"
                value={nameEpisode}
                onChange={handleInputName}
                placeholder="Search title..." />
            <Button onClick={handleClearName}>CLEAR</Button>
        </SearchContainer>
    )
};

export default SearchEpisode;