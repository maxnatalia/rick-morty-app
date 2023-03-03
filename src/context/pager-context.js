import { useContext, createContext } from 'react'
import { usePager } from '../hooks/usePager';

const PagerContext = createContext();

export const usePagerContext = () => useContext(PagerContext);

export const PagerProvider = ({ children }) => {
    const { page, setPage, nextPage, prevPage } = usePager();

    return (
        <PagerContext.Provider value={{ page, setPage, nextPage, prevPage }}>
            {children}
        </PagerContext.Provider>
    )
};