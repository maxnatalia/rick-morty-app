import { usePagerContext } from "../context/pager-context";

const Pagination = ({ text, infoPage, disabled }) => {
    const { page, prevPage, nextPage } = usePagerContext();

    return (
        <div>
            <p>Paginacja</p>
            <p>{text}</p>
            <button onClick={prevPage} disabled={page === 1}>Prev</button>
            <span>{infoPage}</span>
            <button onClick={nextPage} disabled={disabled}>Next</button>
        </div>
    )
};

export default Pagination;