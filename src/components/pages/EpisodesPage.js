import { Link } from "react-router-dom";
import { useEpisodes } from "../../hooks/useEpisodes";
import { usePagerContext } from "../../context/pager-context";
import Pagination from "../Pagination";

const EpisodesPage = () => {
    const pagerEpisode = usePagerContext();

    const { data, isLoading, isError, isSuccess, isFetching } = useEpisodes(pagerEpisode.page);

    return (
        <div>
            <h2>EpisodesPage</h2>

            {isLoading && <p>Loading data...</p>}
            {isError && <p>Error...</p>}

            {isSuccess && data.map((epi) => {
                return <div key={epi.id}>
                    <h3>{epi.id} - {epi.name}</h3>
                    <p>{epi.air_date}</p>
                    <h4>{epi.episode}</h4>

                    {/* <p>{epi.characters}</p> */}
                </div>
            })}
            <Link to="/">Back Home</Link>
            <Pagination text={`Page ${pagerEpisode.page}`} infoPage={isFetching ? "Loading..." : pagerEpisode.page} />
            {/* <Pagination
                text={`Page ${pagerEpisode.page} out of ${data?.info.pages}`}
                infoPage={isFetching ? "Loading..." : pagerEpisode.page}
                disabled={data?.info.pages <= pagerEpisode.page} /> */}
        </div>

    )
};

export default EpisodesPage;