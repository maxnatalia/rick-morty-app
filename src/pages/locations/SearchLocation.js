import { useGlobalContext } from "../../context/global-context";
import { useState } from "react";
import { dimensionsData, locationsData } from "../../utils/filterData";
import { SearchContainer, ButtonsWrapper, Input, TypeButton, Button } from "./styled";

const SearchLocation = () => {
    const { name, handleName, handleClearLocations, handleDimension, handleType } = useGlobalContext();
    const [activeType, setActiveType] = useState(false);
    const [activeDimension, setActiveDimension] = useState(false);

    return (
        <SearchContainer>
            <label htmlFor="name-input">
                <Input
                    id="name-input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                    placeholder="Search by name..." />
            </label>
            <h3>Types:</h3>
            <ButtonsWrapper>
                {locationsData.map((type) => {
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
                {dimensionsData.map((dimension) => {
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