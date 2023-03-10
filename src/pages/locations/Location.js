import { LocationsContainer, LocationWrapper, LocationNumber, LocationName, LocationType, LocationData, ResidentsList, Button } from "./styled";
import { useState } from "react";
import Cast from "../../common/Cast";

const Location = ({ locations }) => {
    const [showAllResidents, setShowAllResidents] = useState(false);

    const handleResidentsShow = () => {
        setShowAllResidents(!showAllResidents);
    };

    return (
        <LocationsContainer>
            {locations?.results.map((location) => {
                return <LocationWrapper key={location.id}>
                    <LocationNumber>{location.id}</LocationNumber>
                    <LocationName>{location.name}</LocationName>
                    <LocationData>Type: <LocationType>{location.type}</LocationType></LocationData>
                    <LocationData>Dimension: <LocationType>{location.dimension}</LocationType></LocationData>
                    <div>
                        {location.residents.length === 0 ? null : <h3>Residents:</h3>}
                        <ResidentsList>
                            {showAllResidents
                                ? location.residents.map((residentUrl) => (
                                    <Cast key={residentUrl} url={residentUrl} />
                                ))
                                : location.residents.slice(0, 3).map((residentUrl) => (
                                    <Cast key={residentUrl} url={residentUrl} />
                                ))}
                        </ResidentsList>
                    </div>
                    {location.residents.length > 3 &&
                        <Button onClick={handleResidentsShow}>
                            {showAllResidents ? "Hide More" : "Show More"}
                        </Button>}
                </LocationWrapper>
            })}
        </LocationsContainer>
    )
}

export default Location;