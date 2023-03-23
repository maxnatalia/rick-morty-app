import { useLocations } from "../../hooks/useLocations";
import { useGlobalContext } from "../../context/global-context";
import Pagination from "../../common/pagination/Pagination";
import { useIsFetching } from "react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchLocation from "./SearchLocation";
import Location from "./Location";
import { Title } from "../../common/styles/Title";
import { Container } from "../../common/styles/Container";
import StatusComponent from "../../common/statusComponent";
import { LoadingSpinner } from "../../common/styles/LoadingSpinner";
import ButtonFavourites from "../../common/buttonFavourites/ButtonFavourites";
import ButtonLinksWrapper from "../../common/buttonLinksWrapper/ButtonLinksWrapper";

const LocationsPage = () => {
    const { page, setPage, type, dimension, name } = useGlobalContext();
    const location = useLocation();
    const { locations, isLoading, isError } = useLocations(page, type, dimension, name);
    const isFetching = useIsFetching();

    useEffect(() => {
        const setPageValue = () => {
            setPage(1);
        };
        setPageValue();
    }, [type, dimension, name, location, setPage]);

    return (
        <Container>
            <Title>Locations</Title>
            <ButtonFavourites />
            <SearchLocation />
            {isLoading && <StatusComponent statusText={"Loading Locations..."} titleText={<LoadingSpinner />} />}
            {isError && <StatusComponent statusText={"No locations found..."} titleText={"Sorry...😢"} />}
            <Location locations={locations} />
            <ButtonLinksWrapper />
            {!isError && <Pagination
                text={locations?.info?.pages ? `Page ${page} out of ${locations?.info?.pages}` : ""}
                infoPage={isFetching ? <LoadingSpinner /> : page}
                disabled={!!locations?.info?.pages && locations?.info?.pages <= page} />}
        </Container>
    )
};

export default LocationsPage;