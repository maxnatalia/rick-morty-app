import { useState } from "react";

export const usePager = () => {
    const [page, setPage] = useState(1);

    const nextPage = () => {
        setPage(page => page + 1)
    };

    const prevPage = () => {
        setPage(page => page - 1)
    };

    return { page, setPage, nextPage, prevPage };
};