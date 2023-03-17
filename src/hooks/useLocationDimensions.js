import { wait } from "../helpers/wait";
import { useQuery } from "react-query";
import { rickandmortyapi } from "../api/rickMortyApi";

const useLocationDimensions = () => {

    const getLocationsDimensions = async () => {
        await wait(1000);
        const { data } = await rickandmortyapi.get(`/location/`);
        const dimensions = [...new Set(data.results.map((location) => location.dimension))];

        return dimensions;
    };

    const { isLoading, isError, isSuccess, data: dimensions } = useQuery(
        ["locationsDimensions"],
        getLocationsDimensions,
    );

    return { isLoading, isError, isSuccess, dimensions };

};

export default useLocationDimensions;