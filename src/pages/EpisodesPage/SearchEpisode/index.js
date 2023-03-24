import { useEffect, useRef } from "react";
import { useGlobalContext } from "../../../context/global-context";
import { Button, Input } from "../../../common/styles";
import { SearchContainer } from "./styled";

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