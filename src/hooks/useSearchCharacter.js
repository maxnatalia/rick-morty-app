import { useState } from "react";

export const useSearchCharacter = () => {

    const [filters, setFilters] = useState({
        gender: '',
        status: '',
        species: '',
        name: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;

        if (value === "All") {
            setFilters(() => ({
                ...filters,
                [name]: "",
            }));

            return;
        }

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

    return { filters, setFilters, handleFilterChange, handleClear }
};
