import { wait } from "../helpers/wait";
import { useQuery } from "react-query";
import { rickandmortyapi } from "../api/rickMortyApi";

const useLocationTypes = () => {

    const getLocationsTypes = async () => {
        await wait(1000);
        const { data } = await rickandmortyapi.get(`/location/`);
        const types = [...new Set(data.results.map((location) => location.type))];

        return types;
    };

    const { isLoading, isError, isSuccess, data: types } = useQuery(
        ["locationsTypes"],
        getLocationsTypes,
    );

    return { isLoading, isError, isSuccess, types };

};

export default useLocationTypes;