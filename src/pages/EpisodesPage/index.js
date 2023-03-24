import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsFetching } from "react-query";
import { useEpisodes } from "./useEpisodes";
import { useGlobalContext } from "../../context/global-context";
import Pagination from "../../common/Pagination";
import ButtonFavourites from "../../common/ButtonFavourites";
import ButtonLinksWrapper from "../../common/ButtonLinksWrapper";
import StatusComponent from "../../common/StatusComponent";
import CharacterListTags from "../../common/CharacterListTags";
import SearchEpisode from "./SearchEpisode";
import { Container, Title, Paragraph, LoadingSpinner } from "../../common/styles";
import { EpisodeNumber, EpisodesWrapper, EpisodeWrapper, ListCast, DataEpisode, EpisodeName } from "./styled";

const EpisodesPage = () => {
    const { page, setPage, nameEpisode } = useGlobalContext();
    const isFetching = useIsFetching();
    const { data, isLoading, isError, isSuccess } = useEpisodes(page, nameEpisode);
    const location = useLocation();

    useEffect(() => {
        const setPageValue = () => {
            setPage(1);
        };
        setPageValue();
    }, [nameEpisode, location, setPage]);

    return (
        <Container>
            <Title>Episodes</Title>
            <ButtonFavourites />
            {isLoading &&
                <StatusComponent
                    titleText={<LoadingSpinner />}
                    statusText={"Loading Episodes..."} />
            }
            {isError &&
                <StatusComponent
                    titleText={"Sorry...😢"}
                    statusText={"No episodes found..."} />
            }
            <SearchEpisode />
            <EpisodesWrapper>
                {isSuccess && data?.results.map((epi) => {
                    return <EpisodeWrapper key={epi.id}>
                        <EpisodeNumber>{epi.episode}</EpisodeNumber>
                        <DataEpisode>
                            <EpisodeName>{epi.name}</EpisodeName>
                            <Paragraph>{epi.air_date}</Paragraph>
                        </DataEpisode>
                        <ListCast>
                            {epi.characters.map((characterUrl) => (
                                <CharacterListTags key={characterUrl} url={characterUrl} />
                            ))}
                        </ListCast>
                    </EpisodeWrapper>
                })}
            </EpisodesWrapper>
            <ButtonLinksWrapper />
            {!isError && <Pagination
                text={`Page ${page} out of ${data?.info.pages}`}
                infoPage={isFetching ? <LoadingSpinner /> : page}
                disabled={data?.info.pages <= page} />}
        </Container>
    )
};

export default EpisodesPage;