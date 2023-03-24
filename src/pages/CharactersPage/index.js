import { useIsFetching } from "react-query";
import { useGlobalContext } from "../../context/global-context";
import { useCharacters } from "./useCharacters";
import StatusComponent from "../../common/StatusComponent";
import Pagination from "../../common/Pagination";
import ButtonFavourites from "../../common/ButtonFavourites";
import ButtonLinksWrapper from "../../common/ButtonLinksWrapper";
import SearchCharacter from "./SearchCharacter";
import Characters from "./Characters";
import { Container, Title, LoadingSpinner } from "../../common/styles";

const CharactersPage = () => {
    const { page, filters } = useGlobalContext();
    const { isLoading, isError, characters } = useCharacters(filters, page);
    const isFetching = useIsFetching();

    return (
        <Container>
            <Title>Characters</Title>
            <ButtonFavourites />
            <SearchCharacter />
            {isLoading &&
                <StatusComponent statusText={"Loading..."} titleText={<LoadingSpinner />} />
            }
            {isError &&
                <StatusComponent statusText={"No characters found..."} titleText={"Sorry...😢"} />
            }
            {characters &&
                <Characters characters={characters} />
            }
            <ButtonLinksWrapper />
            {characters &&
                <Pagination
                    text={`Page ${page} out of ${characters?.info.pages}`}
                    infoPage={isFetching ? <LoadingSpinner /> : page}
                    disabled={characters?.info.pages <= page} />
            }
        </Container>
    )
};

export default CharactersPage;