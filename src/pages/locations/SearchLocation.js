import { useGlobalContext } from "../../context/global-context";
import { useEffect, useRef, useState } from "react";
import { SearchContainer, ButtonsWrapper, TypeButton } from "./styled";
import { Input } from "../../common/styles/Input";
import { Button } from "../../common/styles/Button";
import useLocationTypes from "../../hooks/useLocationTypes";
import useLocationDimensions from "../../hooks/useLocationDimensions";

const SearchLocation = () => {
    const { types } = useLocationTypes();
    const { dimensions } = useLocationDimensions();
    const { name, handleName, handleClearLocations, handleDimension, handleType } = useGlobalContext();
    const [activeType, setActiveType] = useState(false);
    const [activeDimension, setActiveDimension] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <SearchContainer>
            <label htmlFor="name-input">
                <Input
                    ref={inputRef}
                    id="name-input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                    placeholder="Search by name..." />
            </label>
            <h3>Types:</h3>
            <ButtonsWrapper>
                {types?.map((type) => {
                    return <TypeButton
                        active={activeType === type}
                        key={type}
                        onClick={() => {
                            handleType(type);
                            setActiveType(type)
                        }}>
                        {type}
                    </TypeButton>
                })}
            </ButtonsWrapper>
            <h3>Dimensions:</h3>
            <ButtonsWrapper>
                {dimensions?.map((dimension) => {
                    return <TypeButton
                        active={dimension === activeDimension}
                        key={dimension}
                        onClick={() => {
                            handleDimension(dimension);
                            setActiveDimension(dimension)
                        }}>
                        {dimension}
                    </TypeButton>
                })}
            </ButtonsWrapper>
            <Button
                onClick={() => {
                    handleClearLocations();
                    setActiveType(false);
                    setActiveDimension(false)
                }}>
                CLEAR
            </Button>
        </SearchContainer>
    )
};

export default SearchLocation;