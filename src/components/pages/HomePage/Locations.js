import { useLocations } from "../../../hooks/useLocations";
import { useState } from "react";
import { Link } from "react-router-dom";

const Locations = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, isFetching, isSuccess } = useLocations(page);


    const nextPage = () => {
        setPage((prevPage) => prevPage + 1)
    };


    const prevPage = () => {
        setPage((prevPage) => prevPage - 1)
    };



    return (


        <div>


            <h2>Locations</h2>

            {isLoading && <p> Loading...</p>}
            {isError && <p> Error....</p>}
            {isSuccess && data?.results.map((location) => {
                return <div key={location.id}>
                    <p>{location.id}</p>
                    <p>{location.name}</p>
                    <div>{location.type}</div>
                    <p>{location.dimension}</p>
                    {/* <p>{data.info.pages}</p>
                    <p>{data.info.count}</p> */}


                    <div>
                        <h3>RESIDENTS</h3>
                        {/* <p><Link to={`${location.residents}`} > Item</Link></p> */}
                    </div>
                </div>
            })}
            <div>
                <p>Paginacja</p>
                <p>{`Page ${page} out of ${data?.info.pages}`}</p>
                <button onClick={prevPage} disabled={page === 1}>Prev</button>
                <span>{isFetching ? "Loading..." : page}</span>
                <button onClick={nextPage} disabled={data?.info.pages <= page}>Next</button>
            </div>
        </div>

    )
}

export default Locations;