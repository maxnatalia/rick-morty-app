import axios from "axios"
import { useQuery } from "react-query";
import { Tag } from "./styled";

const CharacterTags = ({ url }) => {
    const { isLoading, isError, data } = useQuery(url, () => axios.get(url));

    return (
        <>
            {isLoading && <span>Loading...</span>}
            {isError && null}
            {data && <Tag to={`/character/${data.data.id}`} key={data.data.id}>
                {data.data.name}
            </Tag>}
        </>
    );
};

export default CharacterTags;