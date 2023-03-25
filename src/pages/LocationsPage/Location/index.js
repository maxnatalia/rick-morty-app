import { useState } from "react";
import CharacterListTags from "../../../common/CharacterListTags";
import { Button } from "../../../common/styles/Button";
import { LocationsContainer, LocationWrapper, LocationNumber, LocationName, LocationType, LocationData, WrapperTags } from "./styled";

const Location = ({ locations }) => {
    const [showAllResidents, setShowAllResidents] = useState([]);

    const handleResidentsShow = (index) => {
        setShowAllResidents(prevShowAllResidents => {
            const newState = [...prevShowAllResidents];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <LocationsContainer>
            {locations?.results.map((location, index) => {
                return <LocationWrapper key={location.id}>
                    <LocationNumber>{location.id}</LocationNumber>
                    <LocationName>{location.name}</LocationName>
                    <LocationData>Type:
                        <LocationType>{location.type}</LocationType>
                    </LocationData>
                    <LocationData>Dimension:
                        <LocationType>{location.dimension}</LocationType>
                    </LocationData>
                    {location.residents !== null && location.residents.length === 0
                        ? ""
                        : <LocationData>Residents:</LocationData>
                    }
                    <WrapperTags>
                        {showAllResidents[index]
                            ? location.residents.map((residentUrl) => (
                                <CharacterListTags key={residentUrl} url={residentUrl} />
                            ))
                            : location.residents.slice(0, 3).map((residentUrl) => (
                                <CharacterListTags key={residentUrl} url={residentUrl} />
                            ))}
                    </WrapperTags>
                    {location.residents !== null && location.residents.length > 3 &&
                        <Button onClick={() => handleResidentsShow(index)}>
                            {showAllResidents[index] ? "Hide More" : "Show More"}
                        </Button>}
                </LocationWrapper>
            })}
        </LocationsContainer>
    )
};

export default Location;