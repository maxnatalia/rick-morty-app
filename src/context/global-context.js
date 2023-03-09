import { useContext, createContext } from 'react'
import { usePager } from '../hooks/usePager';
import { useSearchCharacter } from '../hooks/useSearchCharacter';
import useSearchLocation from '../hooks/useSearchLocation';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
    const { page, setPage, nextPage, prevPage } = usePager();
    const { filters, setFilters, handleFilterChange, handleClear } = useSearchCharacter();
    const { name, type, dimension, handleClearLocations, handleDimension, handleType, handleName } = useSearchLocation();
    return (
        <GlobalContext.Provider value={{ page, setPage, nextPage, prevPage, filters, setFilters, handleFilterChange, handleClear, name, type, dimension, handleClearLocations, handleDimension, handleType, handleName }}>
            {children}
        </GlobalContext.Provider>
    )
};