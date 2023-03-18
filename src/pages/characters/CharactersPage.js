import { useCharacters } from "../../hooks/useCharacters";
import Characters from "./Characters";
import Pagination from "../../common/pagination/Pagination";
import { useIsFetching } from "react-query";
import { Container } from "../../common/styles/Container";
import { ButtonLink } from "../../common/styles/ButtonLink";
import { Title } from "../../common/styles/Title";
import StatusComponent from "../../common/statusComponent";
import SearchCharacter from "./SearchCharacter";
import { useGlobalContext } from "../../context/global-context";
import { LoadingSpinner } from "../../common/styles/LoadingSpinner";
import { FavouriteIcon } from "../../common/styles/StarIcons";
import { CountFavourites } from "./styled";

const CharactersPage = () => {
    const { page, filters, favourites } = useGlobalContext();
    const { isLoading, isError, characters } = useCharacters(filters, page);
    const isFetching = useIsFetching();

    return (
        <Container>
            <Title>Characters</Title>
            <ButtonLink to="/favourites" title="Go to My Favourites">
                <FavouriteIcon big="true" />
                <CountFavourites>{favourites.length}</CountFavourites>
            </ButtonLink>
            <SearchCharacter />
            {isLoading && <StatusComponent statusText={"Loading..."} titleText={<LoadingSpinner />} />}
            {isError && <StatusComponent statusText={"No characters found..."} titleText={"Sorry...😢"} />}
            {characters && <Characters characters={characters} />}
            <ButtonLink to="/">
                Back Home
            </ButtonLink>
            {characters && <Pagination
                text={`Page ${page} out of ${characters?.info.pages}`}
                infoPage={isFetching ? <LoadingSpinner /> : page}
                disabled={characters?.info.pages <= page} />}
        </Container>
    )
};

export default CharactersPage;