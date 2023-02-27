import { wait } from "@testing-library/user-event/dist/utils";
import { useQuery } from "react-query";
import { rickandmortyapi } from "../api/rickMortyApi"

export const useLocations = (page) => {



    const getLocation = async ({ queryKey }) => {
        await wait(1000);
        const [, { page }] = queryKey;
        const params = new URLSearchParams({ page });

        const response = await rickandmortyapi.get(`/location?${params}`);

        console.log(response.data.results)
        return response.data;
    };

    const { isLoading, isError, isFetching, isSuccess, data } = useQuery(
        ["locations", { page }],
        getLocation,
        {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 60,
            keepPreviousData: true,
        },

    );



    return { data, isLoading, isError, isSuccess, isFetching };
}