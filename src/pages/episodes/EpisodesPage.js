import { useLocation } from "react-router-dom";
import { useIsFetching } from "react-query";
import { useEpisodes } from "../../hooks/useEpisodes";
import { useGlobalContext } from "../../context/global-context";
import { useEffect } from "react";
import Pagination from "../../common/pagination/Pagination";
import { Container } from "../../common/styles/Container";
import { EpisodeNumber, EpisodesWrapper, EpisodeWrapper, ListCast, DataEpisode, EpisodeName } from "./styled";
import { Title } from "../../common/styles/Title";
import { ButtonLink } from "../../common/styles/ButtonLink";
import StatusComponent from "../../common/statusComponent";
import CharacterTags from "../../common/characterListTags/CharacterTags";
import SearchEpisode from "./SearchEpisode";
import { Paragraph } from "../../common/styles/Paragraph";
import { LoadingSpinner } from "../../common/styles/LoadingSpinner";

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
                                <CharacterTags key={characterUrl} url={characterUrl} />
                            ))}
                        </ListCast>
                    </EpisodeWrapper>
                })}
            </EpisodesWrapper>
            <ButtonLink to="/">Back Home</ButtonLink>

            {!isError && <Pagination
                text={`Page ${page} out of ${data?.info.pages}`}
                infoPage={isFetching ? <LoadingSpinner /> : page}
                disabled={data?.info.pages <= page} />}
        </Container>
    )
};

export default EpisodesPage;