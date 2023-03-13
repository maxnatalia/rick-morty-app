import { wait } from "../helpers/wait";
import { useQuery } from "react-query";
import { rickandmortyapi } from "../api/rickMortyApi";

const getCharacterInfo = async (paramId) => {
    await wait(1000);
    const response = await rickandmortyapi.get(`/character/${paramId}`);

    return response.data;
};

export const useCharacter = (paramId) => {

    const { isLoading, isError, data: character } = useQuery(
        ['character', paramId],
        () => getCharacterInfo(paramId)
    );
    return { isLoading, isError, character };
};

