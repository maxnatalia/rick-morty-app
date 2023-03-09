import { useCharacters } from "../../hooks/useCharacters";
import Characters from "./Characters";
import Pagination from "../../common/pagination/Pagination";
import { useIsFetching } from "react-query";
import { Container } from "./styled";
import { ButtonLink } from "../../common/styles/ButtonLink";
import { Title } from "../../common/styles/Title";
import StatusComponent from "../../common/statusComponent";
import SearchCharacter from "./SearchCharacter";
import { useGlobalContext } from "../../context/global-context";

const CharactersPage = () => {
    const { page, filters } = useGlobalContext();
    const { isLoading, isError, characters } = useCharacters(filters, page);
    const isFetching = useIsFetching();

    return (
        <Container>
            <Title>Rick and Morty - Characters</Title>
            <SearchCharacter />
            {isLoading && <StatusComponent statusText={"Loading..."} />}
            {isError && <StatusComponent statusText={"Sorry, no characters found..."} />}
            {characters && <Characters characters={characters} />}
            <ButtonLink to="/">
                Back Home
            </ButtonLink>
            {characters && <Pagination
                text={`Page ${page} out of ${characters?.info.pages}`}
                infoPage={isFetching ? "Loading..." : page}
                disabled={characters?.info.pages <= page} />}
        </Container>
    )
};

export default CharactersPage;