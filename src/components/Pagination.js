import { usePagerContext } from "../context/pager-context";

const Pagination = ({ text, infoPage, disabled }) => {
    const pagerData = usePagerContext();

    return (
        <div>
            <p>Paginacja</p>
            <p>{text}</p>
            <button onClick={pagerData.prevPage} disabled={pagerData.page === 1}>Prev</button>
            <span>{infoPage}</span>
            <button onClick={pagerData.nextPage} disabled={disabled}>Next</button>
        </div>
    )
};

export default Pagination;