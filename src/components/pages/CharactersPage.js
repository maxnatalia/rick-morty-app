import { useCharacters } from "../../hooks/useCharacters";
import Characters from "../Characters";
import { filterData } from "../../utils/filterData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import { usePagerContext } from "../../context/pager-context";
import { useIsFetching } from "react-query";
import { useLocation } from "react-router-dom";

const Form = () => {
    const { page, setPage } = usePagerContext();

    const [filters, setFilters] = useState({
        gender: '',
        status: '',
        species: '',
        name: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(() => ({
            ...filters,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setFilters({
            gender: '',
            status: '',
            species: '',
            name: '',
        });
    };

    const { isLoading, isError, characters } = useCharacters(filters, page);

    const location = useLocation();

    useEffect(() => {
        setPage(1);
        console.log(location)
    }, [filters, location]);

    const isFetching = useIsFetching();
    return (
        <div>
            <h2>Search Characters by Filters</h2>
            <label htmlFor="name-input">
                <input id="name-input" type="text" name="name" value={filters.name} onChange={handleFilterChange} />
            </label>
            <div>
                {filterData.map(({ name, options }) => (
                    <div key={name}>
                        <label htmlFor={`${name}-select`}>{name}</label>
                        <select
                            name={name}
                            id={`${name}-select`}
                            value={filters[name]}
                            onChange={handleFilterChange}
                        >
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            <button onClick={handleClear}>Clear</button>

            {isLoading && <div>Loading...</div>}
            {isError && <div>Sorry, no characters found...</div>}
            {characters && <Characters characters={characters} />}
            <Link to="/">Back Home</Link>

            <Pagination
                text={`Page ${page} out of ${characters?.info.pages}`}
                infoPage={isFetching ? "Loading..." : page}
                disabled={characters?.info.pages <= page} />
        </div>

    )
};

export default Form;