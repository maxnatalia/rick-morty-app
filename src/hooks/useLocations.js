import { wait } from "@testing-library/user-event/dist/utils";
import { useQuery } from "react-query";
import { rickandmortyapi } from "../api/rickMortyApi"

export const useLocations = (page, type, dimension, name) => {

    const getLocation = async ({ queryKey }) => {
        await wait(1000);
        const [, { page, type, dimension, name }] = queryKey;
        const params = new URLSearchParams({ page, type, dimension, name });

        const { data } = await rickandmortyapi.get(`/location/?${params}`);

        return data;
    };

    const { isLoading, isError, isSuccess, data: locations } = useQuery(
        ["locations", { page, type, dimension, name }],
        getLocation,
    );

    return { locations, isLoading, isError, isSuccess };
};