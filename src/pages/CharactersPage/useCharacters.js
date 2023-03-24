import { useQuery } from "react-query";
import { rickandmortyapi } from "../../api/rickMortyApi";
import { wait } from "../../helpers/wait";

export const useCharacters = (filters, page) => {

    const getCharacters = async ({ queryKey }) => {
        await wait(1000);
        const [, { filters, page }] = queryKey;
        const params = new URLSearchParams({ ...filters, page });

        const { data } = await rickandmortyapi.get(`/character/?${params}`);

        return data;
    };

    const { isLoading, isError, data: characters } = useQuery(
        ['character', { filters, page }],
        getCharacters,
    );

    return { isLoading, isError, characters };
};
