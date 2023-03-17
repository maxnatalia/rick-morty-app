import { useContext, createContext } from 'react'
import useFavourites from '../hooks/useFavourites';
// import useLocalStorage from '../hooks/useLocalStorage';
import { usePager } from '../hooks/usePager';
import { useSearchCharacter } from '../hooks/useSearchCharacter';
import useSearchEpisode from '../hooks/useSearchEpisode';
import useSearchLocation from '../hooks/useSearchLocation';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
    const { page, setPage, nextPage, prevPage } = usePager();
    const { filters, setFilters, handleFilterChange, handleClear } = useSearchCharacter();
    const { name, type, dimension, handleClearLocations, handleDimension, handleType, handleName } = useSearchLocation();
    const { nameEpisode, setNameEpisode, handleClearName, handleInputName } = useSearchEpisode();
    const { favourites, setFavourites, handleAddFavourites, handleRemoveFavourites, isFavourite } = useFavourites();
    // const { getFavourites, saveFavourites } = useLocalStorage();
    return (
        <GlobalContext.Provider value={{
            page,
            setPage,
            nextPage,
            prevPage,
            filters,
            setFilters,
            handleFilterChange,
            handleClear,
            name,
            type,
            dimension,
            handleClearLocations,
            handleDimension,
            handleType,
            handleName,
            handleInputName,
            handleClearName,
            nameEpisode,
            setNameEpisode,
            favourites,
            setFavourites,
            handleAddFavourites,
            handleRemoveFavourites,
            isFavourite
        }}>
            {children}
        </GlobalContext.Provider>
    )
};