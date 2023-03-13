import { wait } from "@testing-library/user-event/dist/utils";
import { useQuery } from "react-query";
import { rickandmortyapi } from "../api/rickMortyApi";

export const useEpisodes = (page, name) => {
    const getEpisodes = async ({ queryKey }) => {
        await wait(1000);

        const [, { page, name }] = queryKey;

        const params = new URLSearchParams({ page, name });

        const { data } = await rickandmortyapi.get(`/episode?${params}`);
        return data;
    };

    const { data, isLoading, isError, isSuccess } = useQuery(
        ["episodes", { page, name }],
        getEpisodes,
    );

    return { data, isLoading, isError, isSuccess };
};
