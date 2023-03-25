import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../../context/global-context";
import useLocationTypes from "./useLocationTypes";
import useLocationDimensions from "./useLocationDimensions";
import { Button, Input, Paragraph } from "../../../common/styles";
import { SearchContainer, ButtonsWrapper, TypeButton } from "./styled";

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
            <Paragraph>Types:</Paragraph>
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
            <Paragraph>Dimensions:</Paragraph>
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