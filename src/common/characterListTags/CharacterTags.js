import axios from "axios"
import { useQuery } from "react-query";
import { Tag } from "./styled";

const CharacterTags = ({ url }) => {
    const { isLoading, error, data } = useQuery(url, () => axios.get(url));

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return null;
    }

    return (
        <Tag to={`/character/${data.data.id}`} key={data.data.id}>
            {data.data.name}
        </Tag>
    );
};

export default CharacterTags;