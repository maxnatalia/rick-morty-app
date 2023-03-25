import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsFetching } from "react-query";
import { useLocations } from "./useLocations";
import { useGlobalContext } from "../../context/global-context";
import Pagination from "../../common/Pagination";
import StatusComponent from "../../common/StatusComponent";
import ButtonFavourites from "../../common/ButtonFavourites";
import ButtonLinksWrapper from "../../common/ButtonLinksWrapper";
import SearchLocation from "./SearchLocation";
import Location from "./Location";
import { Title, Container, LoadingSpinner } from "../../common/styles";

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