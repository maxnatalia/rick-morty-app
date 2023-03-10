import { useLocations } from "../../hooks/useLocations";
import { Link } from "react-router-dom";
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
import { ButtonLink } from "../../common/styles/ButtonLink";

const LocationsPage = () => {
    const { page, setPage, type, dimension, name } = useGlobalContext();
    const location = useLocation();
    const { locations, isLoading, isError } = useLocations(page, type, dimension, name);
    const isFetching = useIsFetching();

    useEffect(() => {
        setPage(1);
    }, [type, dimension, name, location]);

    return (
        <Container>
            <Title>Locations</Title>
            <SearchLocation />
            {isLoading && <StatusComponent statusText={"Loading..."} />}
            {isError && <StatusComponent statusText={"Sorry, no locations found..."} />}
            <Location locations={locations} />
            <ButtonLink to="/">Back Home</ButtonLink>
            <Pagination
                text={locations?.info?.pages ? `Page ${page} out of ${locations?.info?.pages}` : ""}
                infoPage={isFetching ? "Loading..." : page}
                disabled={!!locations?.info?.pages && locations?.info?.pages <= page} />
        </Container>
    )
};

export default LocationsPage;